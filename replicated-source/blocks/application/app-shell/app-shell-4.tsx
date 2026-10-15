import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
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
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "440px", "--sidebar-width-icon": "3rem", "--header-height": "50px"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="*:data-[sidebar=sidebar]:flex-row data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex overflow-hidden transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <div className="flex min-h-full">
              <SidebarProvider>
              <Sidebar className="border-r w-[calc(var(--sidebar-width-icon)+1px)]!">
                <SidebarHeader className="items-center justify-center py-3" sidebar="header">
                  <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </SidebarHeader>
                <SidebarProvider>
                <SidebarContent sidebar="content">
                  <SidebarProvider>
                  <SidebarGroup sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.5" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                            <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            </svg>
                            <span className="absolute bg-primary right-0.5 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                              <path d="m21.854 2.147-10.94 10.939"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
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
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                              <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                              <path d="M10 12h4"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              <path d="M12 8v4"></path>
                              <path d="M12 16h.01"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                              <path d="M10 11v6"></path>
                              <path d="M14 11v6"></path>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                              <path d="M3 6h18"></path>
                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                <SidebarFooter sidebar="footer">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                    <Avatar className="size-6" size="default">
                      <AvatarImage alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </Sidebar>
              </SidebarProvider>
              <div className="bg-background flex flex-1 flex-col overflow-hidden">
                <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold leading-relaxed text-sm">
                      {"Inbox"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                      {"4"}
                    </Badge>
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-opacity cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:[&_svg]:opacity-100 inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Refresh inbox" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-opacity cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:[&_svg]:opacity-100 inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Sort and filter" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                      <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-opacity cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:[&_svg]:opacity-100 inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Compose new email" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                </div>
                <div className="border-b border-border/60 px-3 py-2">
                  <div className="relative">
                    <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-3 text-muted-foreground/50 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                    <Input className="h-7 pl-7 text-xs" id="base-ui-_r_s_" placeholder="Search mail..." aria-label="Search mail" value=""></Input>
                  </div>
                </div>
                <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
                  <div className="border-b border-border/60 flex items-center md:px-2 overflow-x-auto px-1.5 py-1.5 shrink-0">
                    <TabsList className="gap-0.5 h-auto p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                      <TabsTrigger className="dark:data-active:bg-primary! dark:data-active:text-primary-foreground! data-active:bg-primary! data-active:font-medium! data-active:shadow-none! data-active:text-primary-foreground! flex-none font-normal gap-1 group/tab h-auto md:gap-2 md:px-2.5 px-2 py-0.75 rounded-full text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_t_" compositeItemActive="" aria-controls="base-ui-_r_11_">
                        {"All"}
                      </TabsTrigger>
                      <TabsTrigger className="dark:data-active:bg-primary! dark:data-active:text-primary-foreground! data-active:bg-primary! data-active:font-medium! data-active:shadow-none! data-active:text-primary-foreground! flex-none font-normal gap-1 group/tab h-auto md:gap-2 md:px-2.5 px-2 py-0.75 rounded-full text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_u_">
                        {"Unread"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 hidden leading-none md:inline-flex min-w-4 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"4"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="dark:data-active:bg-primary! dark:data-active:text-primary-foreground! data-active:bg-primary! data-active:font-medium! data-active:shadow-none! data-active:text-primary-foreground! flex-none font-normal gap-1 group/tab h-auto md:gap-2 md:px-2.5 px-2 py-0.75 rounded-full text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_v_">
                        {"Starred"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 hidden leading-none md:inline-flex min-w-4 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"3"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="dark:data-active:bg-primary! dark:data-active:text-primary-foreground! data-active:bg-primary! data-active:font-medium! data-active:shadow-none! data-active:text-primary-foreground! flex-none font-normal gap-1 group/tab h-auto md:gap-2 md:px-2.5 px-2 py-0.75 rounded-full text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_10_">
                        {"Files"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 hidden leading-none md:inline-flex min-w-4 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"2"}
                        </Badge>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent className="grow max-h-full" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_11_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_t_">
                    <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                      <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_12_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "690px"}} data-has-overflow-y="" data-overflow-y-end="">
                        <div className="bg-accent/60 border-b border-border/40 cursor-pointer dark:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m1" role="listitem" aria-pressed="true" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2">
                            <span className="bg-primary rounded-full shrink-0 size-1.5" aria-label="Unread"></span>
                          </div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-semibold leading-tight text-foreground text-sm truncate">
                                  {"Sarah Chen"}
                                </span>
                                <span className="font-bold leading-none shrink-0 text-[10px] text-destructive" aria-label="High priority">
                                  {"!"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <svg className="lucide lucide-star size-3 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <span className="font-medium tabular-nums text-[11px] text-foreground/70 whitespace-nowrap">
                                  {"10:42 AM"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="font-medium leading-tight min-w-0 text-foreground/90 text-xs truncate">
                                {"Design review · component library v2.0"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Hey Nick, I've gone through the latest Figma handoff and left detailed comments on the spacing tokens. The button hierarchy looks great but we should revisit the hover states..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <AvatarGroup className="-space-x-1">
                                <Avatar className="size-4" size="default">
                                  <AvatarImage alt="ML" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-4" size="default">
                                  <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-4" size="default">
                                  <AvatarImage alt="JK" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                                {"Design"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m2" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2">
                            <span className="bg-primary rounded-full shrink-0 size-1.5" aria-label="Unread"></span>
                          </div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="Marcus Lee" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-semibold leading-tight text-foreground text-sm truncate">
                                  {"Marcus Lee"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <svg className="lucide lucide-paperclip size-3 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                </svg>
                                <span className="font-medium tabular-nums text-[11px] text-foreground/70 whitespace-nowrap">
                                  {"9:15 AM"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="font-medium leading-tight min-w-0 text-foreground/90 text-xs truncate">
                                {"Q4 Sprint planning, your input needed"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Hey team, sharing the draft sprint board for Q4. We have 3 major milestones: the public launch of NeUI Pro, the icon pack update, and onboarding improvements..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                {"Work"}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <ButtonGroup role="group">
                                <Button className="max-w-40" type="button" tabIndex="0">
                                  <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                    <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Q4-Sprint-Board.pdf"}
                                  </span>
                                  <span className="hidden md:inline-block opacity-50 shrink-0">
                                    {"(1.2 MB)"}
                                  </span>
                                </Button>
                                <Button type="button" tabIndex="0" aria-label="Download attachment">
                                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                                    <path d="M12 15V3"></path>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <path d="m7 10 5 5 5-5"></path>
                                  </svg>
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m3" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2">
                            <span className="bg-primary rounded-full shrink-0 size-1.5" aria-label="Unread"></span>
                          </div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-semibold leading-tight text-foreground text-sm truncate">
                                  {"Emma Wilson"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <span className="font-medium tabular-nums text-[11px] text-foreground/70 whitespace-nowrap">
                                  {"Yesterday"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="font-medium leading-tight min-w-0 text-foreground/90 text-xs truncate">
                                {"Partnership proposal · NeUI integration"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Hi Nick, reaching out because we've been using NeUI for 6 months and it's transformed our design workflow. We'd love to explore a formal partnership..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                                {"Business"}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1 items-center mt-2">
                              <Button type="button" tabIndex="0">
                                {"Schedule Call"}
                              </Button>
                              <Button type="button" tabIndex="0">
                                {"View Proposal"}
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m4" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2"></div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="GitHub" src="https://github.com/github.png"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-medium leading-tight text-foreground/75 text-sm truncate">
                                  {"GitHub"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <span className="tabular-nums text-[11px] text-muted-foreground/60 whitespace-nowrap">
                                  {"Yesterday"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-tight min-w-0 text-foreground/70 text-xs truncate">
                                {"[newcapec] Security advisory on rollup affects your repositories"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"A security advisory on rollup affects at least one of your repositories. neui/core · newcapec/GHSA-mw96-cpmx-2vgc · +1 other"}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <span className="border border-border font-medium h-[18px] inline-flex items-center overflow-hidden rounded-full shrink-0 text-[10px]">
                                <span className="bg-muted/60 border-border border-r flex h-full items-center leading-none px-1.5">
                                  {"repo"}
                                </span>
                                <span className="flex h-full items-center leading-none px-1.5 text-foreground/60">
                                  {"neui/core"}
                                </span>
                              </span>
                              <span className="border border-border font-medium h-[18px] inline-flex items-center overflow-hidden rounded-full shrink-0 text-[10px]">
                                <span className="bg-muted/60 border-border border-r flex h-full items-center leading-none px-1.5">
                                  {"type"}
                                </span>
                                <span className="flex h-full items-center leading-none px-1.5 text-destructive" style={{backgroundColor: "color-mix(in oklch, currentcolor 5%, transparent 95%)"}}>
                                  {"security"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m5" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2"></div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarFallback className="[&_svg]:size-3.5 md:[&_svg]:size-4">
                              <svg aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                              </svg>
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-medium leading-tight text-foreground/75 text-sm truncate">
                                  {"Stripe"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <span className="tabular-nums text-[11px] text-muted-foreground/60 whitespace-nowrap">
                                  {"Mon"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-tight min-w-0 text-foreground/70 text-xs truncate">
                                {"Payment received · $299 from Acme Corp"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"A payment of $299.00 has been received from Acme Corp on November 28, 2024. Your current balance is $1,248.00. View your dashboard for full details..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                {"Finance"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m6" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2"></div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="Alex Martin" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-medium leading-tight text-foreground/75 text-sm truncate">
                                  {"Alex Martin"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <svg className="lucide lucide-paperclip size-3 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                </svg>
                                <span className="tabular-nums text-[11px] text-muted-foreground/60 whitespace-nowrap">
                                  {"Mon"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-tight min-w-0 text-foreground/70 text-xs truncate">
                                {"Invoice #1024 · November services"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Please find attached the invoice for November consulting services. Total: $2,400.00. Payment due December 15th. Thank you for the continued partnership..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <span className="border border-border font-medium h-[18px] inline-flex items-center overflow-hidden rounded-full shrink-0 text-[10px]">
                                <span className="bg-muted/60 border-border border-r flex h-full items-center leading-none px-1.5">
                                  {"#"}
                                </span>
                                <span className="flex h-full items-center leading-none px-1.5 text-warning" style={{backgroundColor: "color-mix(in oklch, currentcolor 5%, transparent 95%)"}}>
                                  {"1024"}
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <ButtonGroup role="group">
                                <Button className="max-w-40" type="button" tabIndex="0">
                                  <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                    <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Invoice-1024.pdf"}
                                  </span>
                                  <span className="hidden md:inline-block opacity-50 shrink-0">
                                    {"(243 KB)"}
                                  </span>
                                </Button>
                                <Button type="button" tabIndex="0" aria-label="Download attachment">
                                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                                    <path d="M12 15V3"></path>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <path d="m7 10 5 5 5-5"></path>
                                  </svg>
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m7" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2"></div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="Vercel" src="https://github.com/vercel.png"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-medium leading-tight text-foreground/75 text-sm truncate">
                                  {"Vercel"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <span className="tabular-nums text-[11px] text-muted-foreground/60 whitespace-nowrap">
                                  {"Sun"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-tight min-w-0 text-foreground/70 text-xs truncate">
                                {"✓ Deployment successful · neui.io/pro"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Your latest deployment to production is live. Build time: 47s. All checks passed. Deployment ID: dpl_AbC123xyz..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <span className="border border-border font-medium h-[18px] inline-flex items-center overflow-hidden rounded-full shrink-0 text-[10px]">
                                <span className="bg-muted/60 border-border border-r flex h-full items-center leading-none px-1.5">
                                  {"env"}
                                </span>
                                <span className="flex h-full items-center leading-none px-1.5 text-success" style={{backgroundColor: "color-mix(in oklch, currentcolor 5%, transparent 95%)"}}>
                                  {"production"}
                                </span>
                              </span>
                              <span className="border border-border font-medium h-[18px] inline-flex items-center overflow-hidden rounded-full shrink-0 text-[10px]">
                                <span className="bg-muted/60 border-border border-r flex h-full items-center leading-none px-1.5">
                                  {"build"}
                                </span>
                                <span className="flex h-full items-center leading-none px-1.5 text-primary" style={{backgroundColor: "color-mix(in oklch, currentcolor 5%, transparent 95%)"}}>
                                  {"47s"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m8" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2">
                            <span className="bg-primary rounded-full shrink-0 size-1.5" aria-label="Unread"></span>
                          </div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="Jessica Brooks" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-semibold leading-tight text-foreground text-sm truncate">
                                  {"Jessica Brooks"}
                                </span>
                                <span className="font-bold leading-none shrink-0 text-[10px] text-destructive" aria-label="High priority">
                                  {"!"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <svg className="lucide lucide-star size-3 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <span className="font-medium tabular-nums text-[11px] text-foreground/70 whitespace-nowrap">
                                  {"Nov 22"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="font-medium leading-tight min-w-0 text-foreground/90 text-xs truncate">
                                {"Following up on your Config 2024 talk"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Hi Nick! I attended your talk and was blown away by the design system workflow. I'd love to chat about how you manage component tokens across themes..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2"></div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m9" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2"></div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarFallback className="[&_svg]:size-3.5 md:[&_svg]:size-4">
                              <svg aria-hidden="true" fill="none" viewBox="0 0 100 100">
                                <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"></path>
                              </svg>
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-medium leading-tight text-foreground/75 text-sm truncate">
                                  {"Linear"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <span className="tabular-nums text-[11px] text-muted-foreground/60 whitespace-nowrap">
                                  {"Nov 21"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-tight min-w-0 text-foreground/70 text-xs truncate">
                                {"Sprint review: 18 issues closed this week"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Great work this sprint. Your team closed 18 issues, moved 5 to In Review, and created 8 new ones. Top contributors: Nick Bold (6), Sarah Chen (5)..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <AvatarGroup className="-space-x-1">
                                <Avatar className="size-4" size="default">
                                  <AvatarFallback className="bg-primary font-bold text-[8px] text-white">
                                    {"NB"}
                                  </AvatarFallback>
                                </Avatar>
                                <Avatar className="size-4" size="default">
                                  <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-4" size="default">
                                  <AvatarImage alt="ML" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="leading-none size-4 text-[8px]">
                                  {"+1"}
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-border/40 cursor-pointer dark:hover:bg-accent/20 flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring gap-1.5 hover:bg-accent/60 items-start md:gap-2.5 md:px-3 md:py-3 px-1.5 py-2 relative transition-colors" id="m10" role="listitem" aria-pressed="false" tabIndex="0">
                          <div className="flex justify-center md:pt-3.5 pt-3 shrink-0 w-2"></div>
                          <Avatar className="md:size-8 mt-0.5 size-6" size="default">
                            <AvatarImage alt="James Kim" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center justify-between mb-1">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="font-medium leading-tight text-foreground/75 text-sm truncate">
                                  {"James Kim"}
                                </span>
                              </div>
                              <div className="flex gap-1 items-center shrink-0">
                                <svg className="lucide lucide-star size-3 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <span className="tabular-nums text-[11px] text-muted-foreground/60 whitespace-nowrap">
                                  {"Nov 20"}
                                </span>
                              </div>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-tight min-w-0 text-foreground/70 text-xs truncate">
                                {"Figma Config 2025 · Speaker confirmation"}
                              </p>
                            </div>
                            <div className="grid mb-1">
                              <p className="leading-snug text-muted-foreground text-xs truncate">
                                {"Congratulations! We're thrilled to confirm your spot as a speaker at Figma Config 2025. Your talk 'Production-Ready Design Systems' has been approved..."}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-focus-foreground transition-shadow">
                                {"Events"}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1 items-center mt-2">
                              <Button type="button" tabIndex="0">
                                {"Confirm Attendance"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_12_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "234.8273615635179px"}}>
                        <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
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
      <SidebarInset>
        <header className="border-b border-border flex gap-1 h-(--header-height) items-center min-w-0 px-2 py-1.5 shrink-0 sm:gap-1.5 sm:px-4">
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
          <Button className="hidden sm:flex text-muted-foreground" type="button" tabIndex="0" aria-label="Previous message">
            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </Button>
          <Button className="hidden sm:flex text-muted-foreground" type="button" tabIndex="0" aria-label="Next message">
            <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Button>
          <div className="hidden items-center sm:flex">
            <Separator className="h-5" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          </div>
          <h3 className="flex-1 font-semibold leading-snug text-foreground text-sm truncate w-0">
            {"Design review · component library v2.0"}
          </h3>
          <div className="flex gap-0.5 items-center ml-auto shrink-0" role="toolbar" aria-label="Message actions">
            <Button className="gap-1.5 hidden sm:flex" type="button" tabIndex="0" aria-label="Reply all">
              <svg className="lucide lucide-corner-up-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                <path d="M9 14 4 9l5-5"></path>
              </svg>
              {"Reply all"}
            </Button>
            <div className="hidden items-center me-0.5 ml-2 sm:flex">
              <Separator className="h-5" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            </div>
            <Button type="button" tabIndex="0" aria-label="Unstar message">
              <svg className="fill-amber-500 lucide lucide-star shrink-0 text-amber-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </Button>
            <Button className="hidden md:flex text-muted-foreground" type="button" tabIndex="0" aria-label="Bookmark message">
              <svg className="lucide lucide-bookmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookmarkIcon" tabler="IconBookmark" hugeicons="Bookmark02Icon" phosphor="BookmarkSimpleIcon" remixicon="RiBookmarkLine" aria-hidden="true">
                <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
              </svg>
            </Button>
            <Button className="hover:text-destructive text-muted-foreground" type="button" tabIndex="0" aria-label="Delete message">
              <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </Button>
            <div className="hidden items-center mx-0.5 sm:flex">
              <Separator className="h-5" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            </div>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 min-h-0 overflow-y-auto p-4">
          <div className="auto-rows-min gap-4 grid md:grid-cols-3">
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
          </div>
          <div className="bg-muted/40 border border-border/40 border-dashed flex-1 min-h-[1000px] rounded-lg"></div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
