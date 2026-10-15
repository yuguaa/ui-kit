import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
    <div className="[--sidebar-accent-foreground:var(--color-accent-foreground)] [--sidebar-accent:var(--color-accent)] [--sidebar-border:var(--color-border)] [--sidebar:var(--color-background)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh overflow-hidden w-full" style={{"--sidebar-width": "250px", "--sidebar-width-icon": "48px", "--app-topbar-height": "40px", "--app-content-header-height": "54px", "--app-sidebar-footer-height": "45px"}}>
      <header className="bg-zinc-900 border-b border-zinc-900/20 fixed flex h-(--app-topbar-height) inset-x-0 items-center pe-[var(--removed-body-scroll-bar-size,0px)] text-invert-foreground top-0 z-30">
        <div className="flex items-center justify-between px-3 sm:pl-3.25 sm:pr-4 w-full">
          <div className="flex gap-2 items-center min-w-0">
            <SidebarProvider>
            <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-invert-foreground/10 hover:text-invert-foreground inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 text-invert-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <a className="flex gap-2 items-center" href="#" aria-label="NeUI home">
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
              <span className="font-semibold text-invert-foreground text-sm tracking-tight">
                {"NeUI"}
              </span>
            </a>
          </div>
          <div className="flex gap-1.5 items-center ml-auto shrink-0" role="toolbar" aria-label="Topbar actions">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-invert-foreground/20 aria-expanded:text-invert-foreground cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-invert-foreground/10 hover:text-invert-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-invert-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open help menu" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
              <svg className="lucide lucide-circle-question-mark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-linear-to-r border-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none from-violet-600 group/button h-7 hover:from-violet-500 hover:text-white hover:to-indigo-500 inline-flex items-center justify-center outline-none px-2.5 select-none shadow-sm shrink-0 text-white to-indigo-600 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
              <svg className="lucide lucide-sparkles size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              {"Upgrade"}
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-invert-foreground/20 aria-expanded:text-invert-foreground bg-invert-foreground/10 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button h-7 hover:bg-invert-foreground/15 hover:text-invert-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-invert-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
              <svg className="lucide lucide-circle-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CirclePlusIcon" tabler="IconCirclePlus" hugeicons="AddCircleIcon" phosphor="PlusCircleIcon" remixicon="RiAddCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
              </svg>
              {"New"}
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Separator className="bg-invert-foreground/25 data-vertical:self-center h-4 hidden mx-1 self-center sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <AvatarGroup className="*:data-[slot=avatar]:ring-zinc-900 -space-x-1.5 hidden sm:flex">
              <Avatar className="size-5" size="default">
                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-5" size="default">
                <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-5" size="default">
                <AvatarImage alt="Nola Voss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </AvatarGroup>
          </div>
        </div>
      </header>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--app-topbar-height))] hidden inset-y-0 md:flex top-(--app-topbar-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="border-b border-sidebar-border flex-row group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 h-(--app-content-header-height) items-center px-3 py-0 shrink-0" sidebar="header">
              <div className="duration-200 ease-linear flex-1 group-data-[collapsible=icon]:grow-0 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 min-w-0 overflow-hidden transition-[width,opacity]">
                <DropdownMenu>
                <DropdownMenuTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:w-8 group/button h-8 hover:bg-accent inline-flex items-center justify-start max-w-full outline-none px-1.5 select-none shrink-0 transition-all w-auto whitespace-nowrap" type="button" tabIndex="0" aria-label="Open workspace menu" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                  <ItemMedia className="bg-emerald-500 font-semibold size-6 text-white text-xs" variant="image" aria-hidden="true">
                    {"M"}
                  </ItemMedia>
                  <span className="font-medium group-data-[collapsible=icon]:hidden text-sm whitespace-nowrap" title="Mint">
                    {"Mint"}
                  </span>
                  <span className="group-data-[collapsible=icon]:hidden ml-auto opacity-60">
                    <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <SidebarProvider>
              <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-data-[collapsible=icon]:ml-0 group/button inline-flex items-center justify-center ml-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent sidebar="content">
              <div className="py-3.5 space-y-3.5">
                <SidebarProvider>
                <SidebarGroup sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupContent sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                          <svg className="lucide lucide-house size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
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
                        <SidebarMenuButton href="#" id="base-ui-_r_n_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-square-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span>
                            {"Tasks"}
                          </span>
                          <SidebarMenuBadge sidebar="menu-badge">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-invert-foreground text-xs transition-shadow">
                              {"3"}
                            </Badge>
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Tasks" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                          <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_u_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span>
                            {"Notes"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Notes" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                          <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_15_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                          <span>
                            {"Contacts"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Contacts" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                          <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_1c_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-building-2 lucide-building2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                            <path d="M10 12h4"></path>
                            <path d="M10 8h4"></path>
                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                          </svg>
                          <span>
                            {"Companies"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Companies" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                          <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_1j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-briefcase-business size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                            <path d="M12 12h.01"></path>
                            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                            <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                          </svg>
                          <span>
                            {"Company"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group/menu-button items-center outline-hidden overflow-hidden peer/menu-button w-full" type="button" id="base-ui-_r_1n_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Manage pinned nav" tabIndex="0" aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                          <span>
                            {"More"}
                          </span>
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
                <SidebarProvider>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="gap-2" sidebar="group-label">
                    <span className="duration-150 transition-transform">
                      <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                    <span className="flex flex-1 gap-2 items-center min-w-0">
                      <button className="min-w-0 text-start truncate" type="button" aria-expanded="true" aria-controls="favorites-nav">
                        {"Favorites"}
                      </button>
                    </span>
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent sidebar="group-content" id="favorites-nav">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_1s_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span className="flex flex-1 gap-2 items-center min-w-0">
                            <span className="truncate">
                              {"New task"}
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"Mint"}
                            </span>
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_1u_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span className="flex flex-1 gap-2 items-center min-w-0">
                            <span className="truncate">
                              {"New deal"}
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"Studio"}
                            </span>
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_20_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span className="flex flex-1 gap-2 items-center min-w-0">
                            <span className="truncate">
                              {"Recent note"}
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"Nova"}
                            </span>
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton href="#" id="base-ui-_r_22_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span className="flex flex-1 gap-2 items-center min-w-0">
                            <span className="truncate">
                              {"Lead added"}
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"Orbit"}
                            </span>
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
                <SidebarGroup className="group-data-[collapsible=icon]:flex hidden" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupContent sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group/menu-button items-center outline-hidden overflow-hidden peer/menu-button w-full" type="button" id="base-ui-_r_26_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Open favorites" tabIndex="0" aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span>
                            {"Favorites"}
                          </span>
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
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="border-sidebar-border border-t group-data-[collapsible=icon]:h-auto h-(--app-sidebar-footer-height) p-0 shrink-0" sidebar="footer">
              <div className="grid grid-cols-2 group-data-[collapsible=icon]:hidden h-full">
                <div className="border-r border-sidebar-border">
                  <Button className="gap-1.5 h-full w-full" type="button" tabIndex="0" aria-label="Invite">
                    <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <line x1="19" x2="19" y1="8" y2="14"></line>
                      <line x1="22" x2="16" y1="11" y2="11"></line>
                    </svg>
                    <span>
                      {"Invite"}
                    </span>
                  </Button>
                </div>
                <Button className="gap-1.5 h-full" type="button" tabIndex="0" aria-label="Help">
                  <svg className="lucide lucide-circle-question-mark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span>
                    {"Help"}
                  </span>
                </Button>
              </div>
              <div className="flex-col gap-1 group-data-[collapsible=icon]:flex hidden items-start px-2 py-2">
                <Button className="size-8" type="button" tabIndex="0" aria-label="Invite">
                  <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                </Button>
                <Button className="size-8" type="button" tabIndex="0" aria-label="Help">
                  <svg className="lucide lucide-circle-question-mark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </Button>
              </div>
            </SidebarFooter>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <SidebarInset className="h-screen min-h-0 overflow-hidden pt-(--app-topbar-height)">
        <div className="bg-background border-b flex h-(--app-content-header-height) items-center px-5 relative shrink-0 text-foreground z-10">
          <div className="flex flex-1 gap-2.5 items-center min-w-0">
            <svg className="lucide lucide-house size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <h1 className="font-semibold text-sm truncate">
              {"Dashboard"}
            </h1>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button className="h-7" type="button" tabIndex="0">
              <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              {"Reports"}
            </Button>
          </div>
        </div>
        <main className="flex flex-1 min-h-0 overflow-y-auto p-5">
          <div className="auto-rows-min flex-1 gap-4 grid md:grid-cols-3 min-h-full">
            <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="bg-muted/40 border-border/40 border-dashed md:col-span-3 min-h-[520px] shadow-none" size="default" aria-hidden="true"></Card>
          </div>
        </main>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
