import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/base/ui/resizable"
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
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar-width:250px] [--sidebar:color-mix(in_oklab,var(--color-sidebar)_60%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "250px", "--sidebar-width-icon": "3rem", "--app-header-height": "50px", "--app-topbar-height": "48px", "--app-bottom-bar-height": "44px"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="border-b border-sidebar-border flex-row in-data-[state=collapsed]:px-0 items-center min-h-(--app-header-height) px-2 py-0 shrink-0" sidebar="header">
              <div className="gap-2 in-data-[state=collapsed]:pl-2.5 inline-flex items-center min-h-10 px-0.5">
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
                <span className="font-medium in-data-[state=collapsed]:hidden text-sm">
                  {"NeUI"}
                </span>
              </div>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent sidebar="content">
              <div className="py-2">
                <form>
                  <SidebarProvider>
                  <SidebarGroup className="py-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="group/search relative" sidebar="group-content">
                      <Button className="bg-transparent border-input duration-200 ease-linear focus-visible:bg-sidebar-accent/70 focus-visible:text-sidebar-foreground font-normal h-8 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 shadow-none text-sidebar-foreground/65 transition-[width,color,background-color] w-full" type="button" tabIndex="0" id="search">
                        {"Search..."}
                      </Button>
                      <svg className="-translate-y-1/2 absolute group-hover/search:text-sidebar-foreground/70 left-2 lucide lucide-search pointer-events-none select-none size-3.5 text-sidebar-foreground/50 top-1/2 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <Kbd className="-translate-y-1/2 absolute bg-transparent border border-sidebar-border/60 in-data-[state=collapsed]:hidden right-2 text-sidebar-foreground/55 top-1/2">
                        {"⌘K"}
                      </Kbd>
                    </SidebarGroupContent>
                    </SidebarProvider>
                  </SidebarGroup>
                  </SidebarProvider>
                  <DialogHeader className="sr-only">
                    <DialogTitle id="base-ui-_r_2_">
                      {"Search"}
                    </DialogTitle>
                    <DialogDescription id="base-ui-_r_3_">
                      {"Search your workspace content."}
                    </DialogDescription>
                  </DialogHeader>
                </form>
              </div>
              <SidebarProvider>
              <SidebarGroup className="py-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <Popover>
                      <PopoverTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group/menu-button items-center outline-hidden overflow-hidden peer/menu-button w-full" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" tabIndex="0" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false" aria-label="Open notifications">
                        <span className="flex items-center justify-center relative shrink-0">
                          <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                          </svg>
                          <span className="-right-0.5 -top-0.5 absolute bg-sidebar-primary ring-2 ring-sidebar rounded-full size-1.5" aria-hidden="true"></span>
                        </span>
                        <span>
                          {"Notifications"}
                        </span>
                      </PopoverTrigger>
                      </Popover>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="in-data-[state=collapsed]:hidden" sidebar="group-label">
                  {"Workspace"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                        </svg>
                        <span className="truncate">
                          {"Today"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        <span className="truncate">
                          {"Handoffs"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-square-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="truncate">
                          {"Follow-ups"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-issues">
                        <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="1"></circle>
                        </svg>
                        <span className="truncate">
                          {"Brief Queue"}
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-team">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span className="truncate">
                          {"Accounts"}
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span className="truncate">
                          {"Insights"}
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
              <SidebarGroup className="group-data-[collapsible=icon]:hidden" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring w-full" aria-expanded="true" aria-controls="team-members-list" sidebar="group-label">
                  {"Operators"}
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content" id="team-members-list">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Maya Chen" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-sidebar bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Maya Chen"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Maya Chen" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                      <SidebarMenuButton href="#" id="base-ui-_r_s_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Owen Price" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-sidebar bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Owen Price"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Owen Price" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                      <SidebarMenuButton href="#" id="base-ui-_r_13_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Noah Singh" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-amber-400 border border-sidebar bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Noah Singh"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Noah Singh" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                      <SidebarMenuButton href="#" id="base-ui-_r_1a_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Iris Hale" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-sidebar bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Iris Hale"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Iris Hale" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                      <SidebarMenuButton href="#" id="base-ui-_r_1h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Sofia Bennett" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-sidebar bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Sofia Bennett"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Sofia Bennett" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                      <SidebarMenuButton href="#" id="base-ui-_r_1o_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Liam Carter" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-muted-foreground/40 border border-sidebar bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Liam Carter"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Liam Carter" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <div className="mt-auto">
                <SidebarProvider>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden" sidebar="group">
                  <Frame className="bg-sidebar-accent/60 md:w-[230px] mx-auto overflow-hidden shrink-0" spacing="xs">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-semibold text-foreground text-xs">
                        {"AI Drafts"}
                      </div>
                    </header>
                    <FramePanel className="space-y-2">
                      <p className="leading-snug text-muted-foreground text-xs">
                        {"Draft credits refresh with the workspace cycle"}
                      </p>
                      <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                        <div className="absolute inset-0 opacity-10 pointer-events-none text-sidebar-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                        <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" aria-valuetext="78%" role="progressbar">
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "78%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </div>
                      <div className="flex items-center justify-between leading-none text-muted-foreground text-xs">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-sidebar-foreground">
                            {"78%"}
                          </span>
                          <span>
                            {"Used"}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-sidebar-foreground">
                            {"22%"}
                          </span>
                          <span>
                            {"Free"}
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </SidebarGroup>
                </SidebarProvider>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="border-sidebar-border border-t h-(--app-bottom-bar-height) justify-center p-0 shrink-0" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu className="h-full justify-center" sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem className="h-full" sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 focus-visible:ring-sidebar-ring gap-2 group-data-[collapsible=icon]:gap-0 h-full hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center min-w-0 outline-hidden overflow-hidden px-3 text-left text-sm transition-colors w-full" type="button" aria-label="Open workspace menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_21_" aria-expanded="false">
                    <Item className="[&_svg]:size-full border-0 p-0 size-6" variant="default" size="default">
                      <ItemMedia className="size-full" variant="icon">
                        <svg className="dark:hidden size-full" aria-hidden="true" fill="#111" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                          <title>
                            {"Codex"}
                          </title>
                          <path clipRule="evenodd" d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"></path>
                        </svg>
                        <svg className="dark:block hidden size-full" aria-hidden="true" fill="#fff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                          <title>
                            {"Codex"}
                          </title>
                          <path clipRule="evenodd" d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <span className="font-medium group-data-[collapsible=icon]:hidden text-sm truncate">
                      {"Codex"}
                    </span>
                    <svg className="group-data-[collapsible=icon]:hidden lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
              <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                {"Collapse"}
              </span>
            </button>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <SidebarInset className="min-h-svh ml-0! overflow-hidden">
        <header className="bg-background border-b border-border flex gap-3 h-(--app-header-height) items-center px-3 shrink-0 sm:px-4 sticky top-0 z-20">
          <div className="flex flex-1 gap-2 items-center min-w-0">
            <SidebarProvider>
            <SidebarTrigger className="-ml-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <Breadcrumb className="min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-1 min-w-0">
                <BreadcrumbItem>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:block [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button h-8 inline-flex items-center justify-center leading-none outline-none px-2.5 py-0 select-none shrink-0 text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_26_" aria-expanded="false">
                    <span className="flex items-center justify-center leading-none shrink-0 size-4">
                      <svg className="size-4" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <defs>
                          <lineargradient id="sidebar-11-ws-acme" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4f46e5"></stop>
                            <stop offset="35%" stopColor="#7c3aed"></stop>
                            <stop offset="70%" stopColor="#a21caf"></stop>
                            <stop offset="100%" stopColor="#db2777"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx="14" cy="14" r="14" fill="url(#sidebar-11-ws-acme)"></circle>
                      </svg>
                    </span>
                    <span className="h-4 inline-flex items-center leading-none sm:not-sr-only sr-only">
                      {"Atlas Desk"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden opacity-60 sm:flex text-xs" role="presentation" aria-hidden="true">
                  {"/"}
                </BreadcrumbSeparator>
                <BreadcrumbItem className="hidden sm:flex">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:block [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button h-8 inline-flex items-center justify-center leading-none outline-none px-2.5 py-0 select-none shrink-0 text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
                    <span className="flex items-center justify-center leading-none shrink-0 size-4">
                      <svg className="lucide lucide-rocket size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                        <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                      </svg>
                    </span>
                    <span className="h-4 inline-flex items-center leading-none">
                      {"Production"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1.5 items-center ml-auto shrink-0" role="toolbar" aria-label="Header actions">
            <Button className="hidden text-muted-foreground xl:inline-flex" type="button" tabIndex="0">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" data-icon="inline-start" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              {"Help"}
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" data-icon="inline-start" aria-hidden="true">
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <span className="hidden xl:inline">
                {"Ask NeUI"}
              </span>
              <span className="xl:hidden">
                {"Ask"}
              </span>
            </Button>
            <Button type="button" tabIndex="0" aria-label="Close context panel" aria-expanded="true">
              <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M15 3v18"></path>
              </svg>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          <div className="bg-background border-b border-border flex gap-2.5 h-(--app-topbar-height) items-center px-3 shrink-0 sm:px-4">
            <div className="flex flex-1 gap-2.5 items-center min-w-0">
              <span className="flex gap-2 items-center min-w-0 shrink" aria-label="Codex">
                <span className="flex items-center justify-center shrink-0 size-6">
                  <svg className="dark:hidden size-5" aria-hidden="true" fill="#111" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Codex"}
                    </title>
                    <path clipRule="evenodd" d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"></path>
                  </svg>
                  <svg className="dark:block hidden size-5" aria-hidden="true" fill="#fff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Codex"}
                    </title>
                    <path clipRule="evenodd" d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"></path>
                  </svg>
                </span>
                <svg className="dark:hidden h-4 max-w-20 w-auto" aria-hidden="true" fill="#111" fillRule="evenodd" viewBox="0 0 91 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                  <title>
                    {"Codex"}
                  </title>
                  <path d="M79.915 14.964l-5.53-7.548h3.33l3.88 5.256 3.88-5.256h3.24l-5.5 7.486 5.683 7.792h-3.361l-4.003-5.5-4.064 5.5H74.2l5.715-7.73zM66.368 23c-1.345 0-2.567-.326-3.667-.978-1.08-.652-1.935-1.579-2.567-2.78-.631-1.203-.947-2.608-.947-4.217 0-1.59.316-2.974.947-4.156.652-1.202 1.518-2.129 2.597-2.78 1.08-.652 2.272-.978 3.575-.978 1.813 0 3.33.55 4.553 1.65 1.222 1.1 1.956 2.597 2.2 4.491.082.693.112 1.477.092 2.353H62.09c.06 1.548.489 2.76 1.283 3.636.815.876 1.793 1.314 2.933 1.314h.184c.855 0 1.599-.224 2.23-.672.632-.448 1.06-1.06 1.284-1.833h2.933a6.147 6.147 0 01-2.322 3.575C69.433 22.54 68.018 23 66.368 23zm3.819-9.687c-.082-1.16-.469-2.077-1.161-2.75-.693-.692-1.558-1.038-2.597-1.038h-.214c-.978 0-1.844.315-2.597.947-.734.611-1.212 1.558-1.437 2.841h8.006zM47.834 23c-1.324 0-2.516-.326-3.575-.978-1.039-.652-1.854-1.579-2.444-2.78-.591-1.202-.887-2.598-.887-4.187 0-1.588.306-2.984.917-4.186.611-1.201 1.446-2.128 2.506-2.78 1.08-.652 2.281-.978 3.605-.978 1.08 0 2.047.224 2.903.672.855.449 1.497 1.019 1.925 1.711V1.306h2.903v21.388h-2.903v-2.108c-.408.672-1.06 1.242-1.956 1.711-.896.469-1.894.703-2.994.703zm.58-2.475c.856 0 1.62-.234 2.292-.703.672-.468 1.192-1.11 1.558-1.925.387-.835.58-1.782.58-2.841 0-1.06-.193-1.997-.58-2.812-.366-.835-.886-1.487-1.558-1.955a3.911 3.911 0 00-2.292-.703h-.183c-1.304 0-2.363.51-3.178 1.528-.794 1.018-1.191 2.332-1.191 3.941 0 1.61.397 2.924 1.191 3.942.815 1.019 1.874 1.528 3.178 1.528h.183zM31.022 23c-1.406 0-2.679-.337-3.82-1.009a7.367 7.367 0 01-2.688-2.841c-.652-1.223-.978-2.587-.978-4.095 0-1.507.326-2.862.978-4.064.651-1.222 1.548-2.17 2.688-2.841 1.141-.693 2.414-1.04 3.82-1.04 1.405 0 2.668.347 3.789 1.04 1.14.672 2.037 1.62 2.688 2.841.652 1.202.978 2.557.978 4.064 0 1.508-.326 2.872-.977 4.095a7.367 7.367 0 01-2.69 2.841C33.69 22.663 32.428 23 31.023 23zm.06-2.476c.857 0 1.62-.224 2.293-.672.672-.468 1.201-1.11 1.589-1.925.386-.835.58-1.792.58-2.872 0-1.08-.194-2.027-.58-2.841-.388-.836-.917-1.477-1.59-1.925a3.911 3.911 0 00-2.291-.703H30.9c-1.304 0-2.373.51-3.209 1.528-.814.998-1.222 2.312-1.222 3.941 0 1.63.407 2.954 1.222 3.972.835.998 1.905 1.497 3.209 1.497h.183zM12.053 23c-2.037 0-3.82-.469-5.348-1.406-1.507-.957-2.668-2.271-3.483-3.941S2 14.098 2 12c0-2.098.407-3.982 1.222-5.653.835-1.67 2.017-2.974 3.545-3.91C8.294 1.478 10.057 1 12.053 1c1.609 0 3.055.316 4.338.947 1.304.611 2.363 1.477 3.178 2.597.815 1.1 1.304 2.374 1.467 3.82h-3.117c-.244-1.365-.876-2.465-1.894-3.3-1.019-.856-2.302-1.283-3.85-1.283h-.245c-1.385 0-2.597.356-3.636 1.069-1.039.713-1.833 1.69-2.383 2.933-.55 1.243-.825 2.648-.825 4.217 0 1.568.275 2.974.825 4.216.55 1.243 1.344 2.22 2.383 2.934 1.04.713 2.251 1.07 3.636 1.07h.245c1.548 0 2.831-.418 3.85-1.254 1.039-.855 1.68-1.976 1.925-3.36h3.086c-.184 1.446-.683 2.729-1.497 3.85-.795 1.12-1.844 1.996-3.148 2.627-1.303.611-2.75.917-4.338.917z"></path>
                </svg>
                <svg className="dark:block h-4 hidden max-w-20 w-auto" aria-hidden="true" fill="#fff" fillRule="evenodd" viewBox="0 0 91 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                  <title>
                    {"Codex"}
                  </title>
                  <path d="M79.915 14.964l-5.53-7.548h3.33l3.88 5.256 3.88-5.256h3.24l-5.5 7.486 5.683 7.792h-3.361l-4.003-5.5-4.064 5.5H74.2l5.715-7.73zM66.368 23c-1.345 0-2.567-.326-3.667-.978-1.08-.652-1.935-1.579-2.567-2.78-.631-1.203-.947-2.608-.947-4.217 0-1.59.316-2.974.947-4.156.652-1.202 1.518-2.129 2.597-2.78 1.08-.652 2.272-.978 3.575-.978 1.813 0 3.33.55 4.553 1.65 1.222 1.1 1.956 2.597 2.2 4.491.082.693.112 1.477.092 2.353H62.09c.06 1.548.489 2.76 1.283 3.636.815.876 1.793 1.314 2.933 1.314h.184c.855 0 1.599-.224 2.23-.672.632-.448 1.06-1.06 1.284-1.833h2.933a6.147 6.147 0 01-2.322 3.575C69.433 22.54 68.018 23 66.368 23zm3.819-9.687c-.082-1.16-.469-2.077-1.161-2.75-.693-.692-1.558-1.038-2.597-1.038h-.214c-.978 0-1.844.315-2.597.947-.734.611-1.212 1.558-1.437 2.841h8.006zM47.834 23c-1.324 0-2.516-.326-3.575-.978-1.039-.652-1.854-1.579-2.444-2.78-.591-1.202-.887-2.598-.887-4.187 0-1.588.306-2.984.917-4.186.611-1.201 1.446-2.128 2.506-2.78 1.08-.652 2.281-.978 3.605-.978 1.08 0 2.047.224 2.903.672.855.449 1.497 1.019 1.925 1.711V1.306h2.903v21.388h-2.903v-2.108c-.408.672-1.06 1.242-1.956 1.711-.896.469-1.894.703-2.994.703zm.58-2.475c.856 0 1.62-.234 2.292-.703.672-.468 1.192-1.11 1.558-1.925.387-.835.58-1.782.58-2.841 0-1.06-.193-1.997-.58-2.812-.366-.835-.886-1.487-1.558-1.955a3.911 3.911 0 00-2.292-.703h-.183c-1.304 0-2.363.51-3.178 1.528-.794 1.018-1.191 2.332-1.191 3.941 0 1.61.397 2.924 1.191 3.942.815 1.019 1.874 1.528 3.178 1.528h.183zM31.022 23c-1.406 0-2.679-.337-3.82-1.009a7.367 7.367 0 01-2.688-2.841c-.652-1.223-.978-2.587-.978-4.095 0-1.507.326-2.862.978-4.064.651-1.222 1.548-2.17 2.688-2.841 1.141-.693 2.414-1.04 3.82-1.04 1.405 0 2.668.347 3.789 1.04 1.14.672 2.037 1.62 2.688 2.841.652 1.202.978 2.557.978 4.064 0 1.508-.326 2.872-.977 4.095a7.367 7.367 0 01-2.69 2.841C33.69 22.663 32.428 23 31.023 23zm.06-2.476c.857 0 1.62-.224 2.293-.672.672-.468 1.201-1.11 1.589-1.925.386-.835.58-1.792.58-2.872 0-1.08-.194-2.027-.58-2.841-.388-.836-.917-1.477-1.59-1.925a3.911 3.911 0 00-2.291-.703H30.9c-1.304 0-2.373.51-3.209 1.528-.814.998-1.222 2.312-1.222 3.941 0 1.63.407 2.954 1.222 3.972.835.998 1.905 1.497 3.209 1.497h.183zM12.053 23c-2.037 0-3.82-.469-5.348-1.406-1.507-.957-2.668-2.271-3.483-3.941S2 14.098 2 12c0-2.098.407-3.982 1.222-5.653.835-1.67 2.017-2.974 3.545-3.91C8.294 1.478 10.057 1 12.053 1c1.609 0 3.055.316 4.338.947 1.304.611 2.363 1.477 3.178 2.597.815 1.1 1.304 2.374 1.467 3.82h-3.117c-.244-1.365-.876-2.465-1.894-3.3-1.019-.856-2.302-1.283-3.85-1.283h-.245c-1.385 0-2.597.356-3.636 1.069-1.039.713-1.833 1.69-2.383 2.933-.55 1.243-.825 2.648-.825 4.217 0 1.568.275 2.974.825 4.216.55 1.243 1.344 2.22 2.383 2.934 1.04.713 2.251 1.07 3.636 1.07h.245c1.548 0 2.831-.418 3.85-1.254 1.039-.855 1.68-1.976 1.925-3.36h3.086c-.184 1.446-.683 2.729-1.497 3.85-.795 1.12-1.844 1.996-3.148 2.627-1.303.611-2.75.917-4.338.917z"></path>
                </svg>
              </span>
            </div>
            <div className="flex gap-1.5 items-center justify-end min-w-0 shrink-0 sm:gap-2" role="toolbar" aria-label="Record actions">
              <Button className="sm:hidden" type="button" tabIndex="0" aria-label="Add note">
                <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                </svg>
              </Button>
              <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
                <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                </svg>
                <span>
                  {"Add note"}
                </span>
              </Button>
              <ButtonGroup role="group">
                <Button type="button" tabIndex="0" aria-label="Collapse workspace sidebar" aria-pressed="true">
                  <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                </Button>
                <Button type="button" tabIndex="0" aria-label="Collapse details sidebar" aria-pressed="true">
                  <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M12 3v18"></path>
                  </svg>
                </Button>
                <Button type="button" tabIndex="0" aria-label="Collapse context sidebar" aria-pressed="true">
                  <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M15 3v18"></path>
                  </svg>
                </Button>
                <Button type="button" tabIndex="0" aria-label="Hide workbench bottom sheet" aria-pressed="true">
                  <svg className="lucide lucide-panel-bottom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelBottomIcon" tabler="IconLayoutBottombar" hugeicons="SidebarBottomIcon" phosphor="RectangleIcon" remixicon="RiLayoutBottomLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 15h18"></path>
                  </svg>
                </Button>
                <Button type="button" tabIndex="0" aria-label="Collapse all sidebars" aria-pressed="true">
                  <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                  </svg>
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden">
            <ResizablePanelGroup className="[&_[data-panel]>div]:outline-none [&_[data-panel]]:outline-none min-h-0" group="true" testid="sidebar-11-shell-vertical-panel-group" id="sidebar-11-shell-vertical-panel-group" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexFlow: "column", touchAction: "pan-x"}}>
              <ResizablePanel panel="true" testid="sidebar-11-primary-workspace-panel" id="sidebar-11-primary-workspace-panel" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "64 1 0px", overflow: "visible"}}>
                <div className="min-h-0 min-w-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-x"}}>
                  <div className="hidden lg:block min-h-0 min-w-0 overflow-hidden size-full">
                    <ResizablePanelGroup className="[&_[data-panel]>div]:outline-none [&_[data-panel]]:outline-none min-h-0" group="true" testid="sidebar-11-desktop-panel-group" id="sidebar-11-desktop-panel-group" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexFlow: "row", touchAction: "pan-y"}}>
                      <ResizablePanel panel="true" testid="sidebar-11-desktop-main-panel" id="sidebar-11-desktop-main-panel" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "62 1 0px", overflow: "visible"}}>
                        <div className="min-w-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
                          <section className="flex flex-col min-h-0 min-w-0 overflow-hidden size-full">
                            <div className="bg-background border-b border-border flex h-11 items-stretch min-w-0 px-3 shrink-0">
                              <div className="flex gap-5 h-full items-center min-w-0 overflow-visible w-full">
                                <Tabs className="flex-1 h-full min-w-0" data-orientation="horizontal" activationDirection="none">
                                  <TabsList className="h-full justify-start p-0! self-start w-auto" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                                    <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-bottom-px! h-full!" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2h_" compositeItemActive="">
                                      <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                      </svg>
                                      <span>
                                        {"Overview"}
                                      </span>
                                    </TabsTrigger>
                                    <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-bottom-px! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2i_">
                                      <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                      </svg>
                                      <span>
                                        {"Activity"}
                                      </span>
                                    </TabsTrigger>
                                    <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-bottom-px! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2j_">
                                      <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                      </svg>
                                      <span>
                                        {"Briefs"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.625rem] transition-shadow">
                                        {"6"}
                                      </Badge>
                                    </TabsTrigger>
                                  </TabsList>
                                </Tabs>
                                <div className="after:-bottom-px after:absolute after:bg-foreground after:h-0.5 after:inset-x-0 after:opacity-0 after:transition-opacity after:z-10 flex h-full items-center ml-auto relative shrink-0">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium group/button inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="5 more record views" aria-haspopup="menu" id="base-ui-_r_57_" aria-expanded="false">
                                    <span>
                                      {"+5 more"}
                                    </span>
                                    <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-h-0 overflow-hidden">
                              <ScrollArea className="h-full mr-0.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2p_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "216px"}} data-has-overflow-y="" data-overflow-y-end="">
                                  <div className="flex flex-col gap-4 min-h-full p-4">
                                    <div className="gap-3 grid sm:grid-cols-2 xl:grid-cols-3">
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "42%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "51%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "42%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "51%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "42%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "51%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                    </div>
                                    <div className="bg-background/60 border border-border/60 border-dashed p-4 rounded-lg">
                                      <div className="flex flex-col gap-3">
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "76%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "63%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "74%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "61%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "72%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "59%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_2p_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "171.61089494163426px"}}>
                                  <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                                </div>
                              </ScrollArea>
                            </div>
                          </section>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle className="[&>div]:transition-colors [&[data-separator=active]>div]:bg-primary [&[data-separator=hover]>div]:bg-primary data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:[&>div]:bg-primary hover:bg-primary transition-colors" aria-orientation="vertical" separator="inactive" testid="_r_2q_" id="_r_2q_" role="separator" tabIndex="0" style={{flex: "0 0 auto", touchAction: "none"}} aria-controls="sidebar-11-desktop-main-panel" aria-valuemax="72" aria-valuemin="50" aria-valuenow="62">
                        <div className="cn-resizable-handle-icon flex shrink-0 z-10"></div>
                      </ResizableHandle>
                      <ResizablePanel panel="true" testid="sidebar-11-desktop-detail-panel" id="sidebar-11-desktop-detail-panel" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "38 1 0px", overflow: "visible"}}>
                        <div className="min-w-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
                          <aside className="flex flex-col min-h-0 min-w-0 overflow-hidden size-full" aria-hidden="false">
                            <div className="bg-background border-b border-border flex gap-2 h-11 items-stretch min-w-0 px-3 shrink-0">
                              <div className="flex-1 min-w-0">
                                <div className="flex gap-5 h-full items-center min-w-0 overflow-visible w-full">
                                  <Tabs className="flex-1 h-full min-w-0" data-orientation="horizontal" activationDirection="none">
                                    <TabsList className="h-full justify-start p-0! self-start w-auto" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                                      <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-bottom-px! h-full!" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2s_" compositeItemActive="">
                                        <svg className="lucide lucide-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                                          <path d="M3 5h.01"></path>
                                          <path d="M3 12h.01"></path>
                                          <path d="M3 19h.01"></path>
                                          <path d="M8 5h13"></path>
                                          <path d="M8 12h13"></path>
                                          <path d="M8 19h13"></path>
                                        </svg>
                                        <span>
                                          {"Details"}
                                        </span>
                                      </TabsTrigger>
                                    </TabsList>
                                  </Tabs>
                                  <div className="after:-bottom-px after:absolute after:bg-foreground after:h-0.5 after:inset-x-0 after:opacity-0 after:transition-opacity after:z-10 flex h-full items-center ml-auto relative shrink-0">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium group/button inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="1 more detail views" aria-haspopup="menu" id="base-ui-_r_5c_" aria-expanded="false">
                                      <span>
                                        {"+1 more"}
                                      </span>
                                      <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-1 items-center ml-auto shrink-0">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Detail sidebar actions" aria-haspopup="menu" id="base-ui-_r_31_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Hide detail sidebar">
                                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                  </svg>
                                </Button>
                              </div>
                            </div>
                            <div className="flex-1 min-h-0 overflow-hidden">
                              <ScrollArea className="h-full mr-0.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_33_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "354px"}} data-has-overflow-y="" data-overflow-y-end="">
                                  <div className="flex flex-col gap-5 min-h-full p-4">
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_33_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "135.2883435582822px"}}>
                                  <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                                </div>
                              </ScrollArea>
                            </div>
                          </aside>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </div>
                  <div className="lg:hidden min-h-0 min-w-0 overflow-hidden size-full">
                    <ResizablePanelGroup className="[&_[data-panel]>div]:outline-none [&_[data-panel]]:outline-none min-h-0" group="true" testid="sidebar-11-mobile-panel-group" id="sidebar-11-mobile-panel-group" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexFlow: "column", touchAction: "pan-x"}}>
                      <ResizablePanel panel="true" testid="sidebar-11-mobile-main-panel" id="sidebar-11-mobile-main-panel" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "50 1 0px", overflow: "visible"}}>
                        <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-x"}}>
                          <section className="flex flex-col min-h-0 min-w-0 overflow-hidden size-full">
                            <div className="bg-background border-b border-border flex h-11 items-stretch min-w-0 px-3 shrink-0">
                              <div className="flex gap-5 h-full items-center min-w-0 overflow-visible w-full">
                                <Tabs className="flex-1 h-full min-w-0" data-orientation="horizontal" activationDirection="none">
                                  <TabsList className="h-full justify-start p-0! self-start w-auto" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                                    <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-bottom-px! h-full!" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_36_" compositeItemActive="">
                                      <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                      </svg>
                                      <span>
                                        {"Overview"}
                                      </span>
                                    </TabsTrigger>
                                  </TabsList>
                                </Tabs>
                                <div className="after:-bottom-px after:absolute after:bg-foreground after:h-0.5 after:inset-x-0 after:opacity-0 after:transition-opacity after:z-10 flex h-full items-center ml-auto relative shrink-0">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium group/button inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="7 more record views" aria-haspopup="menu" id="base-ui-_r_5h_" aria-expanded="false">
                                    <span>
                                      {"+7 more"}
                                    </span>
                                    <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-h-0 overflow-hidden">
                              <ScrollArea className="h-full mr-0.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_3e_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                                  <div className="flex flex-col gap-4 min-h-full p-4">
                                    <div className="gap-3 grid sm:grid-cols-2 xl:grid-cols-3">
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "42%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "51%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "42%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "51%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "42%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                      <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-h-24 p-4 rounded-lg">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "51%"}}></div>
                                        <div className="bg-muted/55 h-4 mt-auto rounded-md shrink-0 w-20" aria-hidden="true"></div>
                                      </div>
                                    </div>
                                    <div className="bg-background/60 border border-border/60 border-dashed p-4 rounded-lg">
                                      <div className="flex flex-col gap-3">
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "76%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "63%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "74%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "61%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "72%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                          <div className="bg-muted/55 rounded-full shrink-0 size-2.5" aria-hidden="true"></div>
                                          <div className="flex-1 min-w-0">
                                            <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "59%"}}></div>
                                          </div>
                                          <div className="bg-muted/55 h-3 rounded-md shrink-0 w-9" aria-hidden="true"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ScrollArea>
                            </div>
                          </section>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle className="[&>div]:transition-colors [&[data-separator=active]>div]:bg-primary [&[data-separator=hover]>div]:bg-primary data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:[&>div]:bg-primary hover:bg-primary transition-colors" aria-orientation="horizontal" separator="inactive" testid="_r_3f_" id="_r_3f_" role="separator" tabIndex="0" aria-controls="sidebar-11-mobile-main-panel" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" style={{flex: "0 0 auto", touchAction: "none"}}>
                        <div className="cn-resizable-handle-icon flex shrink-0 z-10"></div>
                      </ResizableHandle>
                      <ResizablePanel panel="true" testid="sidebar-11-mobile-detail-panel" id="sidebar-11-mobile-detail-panel" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "50 1 0px", overflow: "visible"}}>
                        <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-x"}}>
                          <aside className="flex flex-col min-h-0 min-w-0 overflow-hidden size-full" aria-hidden="false">
                            <div className="bg-background border-b border-border flex gap-2 h-11 items-stretch min-w-0 px-3 shrink-0">
                              <div className="flex-1 min-w-0">
                                <div className="flex gap-5 h-full items-center min-w-0 overflow-visible w-full">
                                  <Tabs className="flex-1 h-full min-w-0" data-orientation="horizontal" activationDirection="none">
                                    <TabsList className="h-full justify-start p-0! self-start w-auto" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                                      <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-bottom-px! h-full!" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_3h_" compositeItemActive="">
                                        <svg className="lucide lucide-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                                          <path d="M3 5h.01"></path>
                                          <path d="M3 12h.01"></path>
                                          <path d="M3 19h.01"></path>
                                          <path d="M8 5h13"></path>
                                          <path d="M8 12h13"></path>
                                          <path d="M8 19h13"></path>
                                        </svg>
                                        <span>
                                          {"Details"}
                                        </span>
                                      </TabsTrigger>
                                    </TabsList>
                                  </Tabs>
                                  <div className="after:-bottom-px after:absolute after:bg-foreground after:h-0.5 after:inset-x-0 after:opacity-0 after:transition-opacity after:z-10 flex h-full items-center ml-auto relative shrink-0">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium group/button inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="1 more detail views" aria-haspopup="menu" id="base-ui-_r_5m_" aria-expanded="false">
                                      <span>
                                        {"+1 more"}
                                      </span>
                                      <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-1 items-center ml-auto shrink-0">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Detail sidebar actions" aria-haspopup="menu" id="base-ui-_r_3m_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Hide detail sidebar">
                                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                  </svg>
                                </Button>
                              </div>
                            </div>
                            <div className="flex-1 min-h-0 overflow-hidden">
                              <ScrollArea className="h-full mr-0.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_3o_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                                  <div className="flex flex-col gap-5 min-h-full p-4">
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                      <div className="flex gap-2 items-center">
                                        <div className="bg-muted/55 h-3 rounded-md shrink-0 w-24" aria-hidden="true"></div>
                                      </div>
                                      <div className="pl-4">
                                        <div className="flex flex-col gap-3">
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "56%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "67%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "78%"}}></div>
                                            </div>
                                          </div>
                                          <div className="flex gap-3 items-center">
                                            <div className="flex-1 min-w-0">
                                              <div className="bg-muted/55 h-3 rounded-md shrink-0" aria-hidden="true" style={{width: "65%"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ScrollArea>
                            </div>
                          </aside>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle className="[&>div]:transition-colors [&[data-separator=active]>div]:bg-primary [&[data-separator=hover]>div]:bg-primary data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:[&>div]:bg-primary hover:bg-primary transition-colors" aria-orientation="horizontal" separator="inactive" testid="_r_3p_" id="_r_3p_" role="separator" tabIndex="0" style={{flex: "0 0 auto", touchAction: "none"}} aria-controls="sidebar-11-primary-workspace-panel" aria-valuemax="76" aria-valuemin="38" aria-valuenow="64">
                <div className="cn-resizable-handle-icon flex shrink-0 z-10"></div>
              </ResizableHandle>
              <ResizablePanel panel="true" testid="sidebar-11-workbench-panel" id="sidebar-11-workbench-panel" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "36 1 0px", overflow: "visible"}}>
                <div className="min-h-0 min-w-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-x"}}>
                  <section className="bg-background flex flex-col min-h-0 min-w-0 size-full" aria-label="Workbench bottom sheet">
                    <div className="border-b border-border flex gap-3 h-10 items-center justify-between px-3 shrink-0 sm:px-4">
                      <span className="font-semibold text-sm truncate">
                        {"Workbench"}
                      </span>
                      <div className="flex gap-1 items-center shrink-0">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Workbench actions" aria-haspopup="menu" id="base-ui-_r_3v_" aria-expanded="false">
                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                        <Dialog>
                        <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand workbench" baseUiClickTrigger="" id="base-ui-_r_41_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                            <path d="M15 3h6v6"></path>
                            <path d="m21 3-7 7"></path>
                            <path d="m3 21 7-7"></path>
                            <path d="M9 21H3v-6"></path>
                          </svg>
                        </DialogTrigger>
                        </Dialog>
                        <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Hide workbench sheet">
                          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 min-h-0 overflow-hidden">
                      <ScrollArea className="h-full mr-0.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                        <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_42_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "712px"}} data-has-overflow-y="" data-overflow-y-end="">
                          <div className="gap-4 grid lg:grid-cols-2 min-h-full p-4">
                            <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-w-0 rounded-lg">
                              <div className="border-b border-border/70 border-dashed flex gap-3 items-center min-h-12 px-4">
                                <div className="bg-muted/55 h-4 rounded-md shrink-0 w-36" aria-hidden="true"></div>
                              </div>
                              <div className="flex flex-col">
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-w-0 rounded-lg">
                              <div className="border-b border-border/70 border-dashed flex gap-3 items-center min-h-12 px-4">
                                <div className="bg-muted/55 h-4 rounded-md shrink-0 w-36" aria-hidden="true"></div>
                              </div>
                              <div className="flex flex-col">
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-background/60 border border-border/60 border-dashed flex flex-col min-w-0 rounded-lg">
                              <div className="border-b border-border/70 border-dashed flex gap-3 items-center min-h-12 px-4">
                                <div className="bg-muted/55 h-4 rounded-md shrink-0 w-36" aria-hidden="true"></div>
                              </div>
                              <div className="flex flex-col">
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                                <div className="border-b border-border/70 border-dashed flex gap-4 items-center last:border-b-0 min-h-12 px-4 py-3">
                                  <div className="bg-muted/55 flex-1 h-3 rounded-md" aria-hidden="true"></div>
                                  <div className="bg-muted/55 h-5 rounded-full shrink-0 w-10" aria-hidden="true"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_42_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "16px"}}>
                          <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className="bg-background border-border border-t flex h-(--app-bottom-bar-height) items-stretch min-w-0 px-3 shrink-0 sm:px-4">
                      <div className="flex gap-5 h-full items-center min-w-0 overflow-visible w-full">
                        <Tabs className="flex-1 h-full min-w-0" data-orientation="horizontal" activationDirection="none">
                          <TabsList className="h-full justify-start p-0! self-start w-auto" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                            <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-top-px! group-data-horizontal/tabs:after:bottom-auto! h-full!" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_43_" compositeItemActive="">
                              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="Settings02Icon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              <span>
                                {"Settings"}
                              </span>
                            </TabsTrigger>
                            <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-top-px! group-data-horizontal/tabs:after:bottom-auto! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_44_">
                              <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                              </svg>
                              <span>
                                {"Webhooks"}
                              </span>
                            </TabsTrigger>
                            <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-top-px! group-data-horizontal/tabs:after:bottom-auto! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_45_">
                              <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span>
                                {"Events"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-warning-foreground transition-shadow">
                                {"8"}
                              </Badge>
                            </TabsTrigger>
                            <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-top-px! group-data-horizontal/tabs:after:bottom-auto! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_46_">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                              <span>
                                {"Logs"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-info-foreground transition-shadow">
                                {"3"}
                              </Badge>
                            </TabsTrigger>
                            <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-top-px! group-data-horizontal/tabs:after:bottom-auto! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_47_">
                              <svg className="lucide lucide-heart-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartPulseIcon" tabler="IconHeartbeat" hugeicons="HeartCheckIcon" phosphor="HeartbeatIcon" remixicon="RiHeartPulseLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                                <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                              </svg>
                              <span>
                                {"Health"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-destructive-foreground transition-shadow">
                                {"12"}
                              </Badge>
                            </TabsTrigger>
                            <TabsTrigger className="after:z-10 flex-none! group-data-horizontal/tabs:after:-top-px! group-data-horizontal/tabs:after:bottom-auto! h-full!" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_48_">
                              <svg className="lucide lucide-scan-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="m16 16-1.9-1.9"></path>
                              </svg>
                              <span>
                                {"Inspector"}
                              </span>
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>
                  </section>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </SidebarInset>
      <div className="bg-background border-l duration-300 ease-in-out flex h-svh overflow-hidden shrink-0 sticky top-0 transition-[width] w-[280px]" role="complementary" aria-label="Context panel" aria-hidden="false">
        <div className="flex shrink-0 w-[280px]">
          <div className="bg-background flex flex-1 flex-col overflow-hidden">
            <div className="border-b border-border flex flex-col items-center px-1 py-2 shrink-0">
              <div className="flex items-center justify-between pb-1 px-2 w-full">
                <span className="font-medium text-foreground text-sm">
                  {"February 2026"}
                </span>
                <div className="flex gap-0.5 items-center justify-center">
                  <Button type="button" tabIndex="0" aria-label="Previous month">
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex="0" aria-label="Next month">
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <Calendar className="[--cell-size:--spacing(7)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
                <div className="flex flex-col gap-4 md:flex-row rdp-months relative">
                  <div className="flex flex-col gap-4 rdp-month w-full">
                    <div className="hidden">
                      <span className="cn-calendar-caption font-medium rdp-caption_label select-none text-sm" role="status" aria-live="polite">
                        {"February 2026"}
                      </span>
                    </div>
                    <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="February 2026">
                      <thead aria-hidden="true">
                        <tr className="flex rdp-weekdays">
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Sunday" scope="col">
                            {"Su"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Monday" scope="col">
                            {"Mo"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Tuesday" scope="col">
                            {"Tu"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Wednesday" scope="col">
                            {"We"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Thursday" scope="col">
                            {"Th"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Friday" scope="col">
                            {"Fr"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Saturday" scope="col">
                            {"Sa"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rdp-weeks">
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-01">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/1" aria-label="Sunday, February 1st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"1"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-02">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/2" aria-label="Monday, February 2nd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"2"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-03">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/3" aria-label="Tuesday, February 3rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"3"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-04">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/4" aria-label="Wednesday, February 4th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"4"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-05">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/5" aria-label="Thursday, February 5th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"5"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-06">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/6" aria-label="Friday, February 6th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"6"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-07">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/7" aria-label="Saturday, February 7th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"7"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-08">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/8" aria-label="Sunday, February 8th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"8"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-09">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/9" aria-label="Monday, February 9th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"9"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-10">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/10" aria-label="Tuesday, February 10th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"10"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-11">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/11" aria-label="Wednesday, February 11th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"11"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-12">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/12" aria-label="Thursday, February 12th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"12"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-13">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/13" aria-label="Friday, February 13th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"13"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-14">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/14" aria-label="Saturday, February 14th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"14"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-15">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/15" aria-label="Sunday, February 15th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"15"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-16">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/16" aria-label="Monday, February 16th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"16"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-17">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/17" aria-label="Tuesday, February 17th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"17"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-18">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/18" aria-label="Wednesday, February 18th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"18"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-19">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/19" aria-label="Thursday, February 19th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"19"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-20">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/20" aria-label="Friday, February 20th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"20"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-21">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/21" aria-label="Saturday, February 21st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"21"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-22">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/22" aria-label="Sunday, February 22nd, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"22"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-23">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/23" aria-label="Monday, February 23rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"23"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square bg-accent group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) rounded-md select-none text-center text-foreground w-full" role="gridcell" aria-selected="true" data-day="2026-02-24" data-selected="true" data-today="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="0" day="2026/2/24" selectedSingle="true" aria-label="Today, Tuesday, February 24th, 2026, selected">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"24"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-25">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/25" aria-label="Wednesday, February 25th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"25"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-26">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/26" aria-label="Thursday, February 26th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"26"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-27">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/27" aria-label="Friday, February 27th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"27"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-02-28">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/2/28" aria-label="Saturday, February 28th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"28"}
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Calendar>
            </div>
            <div className="grow max-h-full min-h-0">
              <ScrollArea className="grow h-full mr-0.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_49_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "213px"}} data-has-overflow-y="" data-overflow-y-end="">
                  <div className="flex flex-col h-full">
                    <div className="border-b border-border py-2">
                      <div className="px-3 py-1">
                        <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                          {"My Calendars"}
                        </span>
                      </div>
                      <div className="px-2" role="list">
                        <div role="listitem">
                          <Collapsible data-open="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-start outline-none px-1.5 select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for nick@company.io" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_4a_" aria-expanded="true">
                              <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <span className="truncate">
                                {"nick@company.io"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                {"3"}
                              </Badge>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_r_4a_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <div className="py-0.5">
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                                  <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_4b_" aria-checked="true" aria-label="Toggle Work">
                                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    {"Work"}
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-hover:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Work" aria-haspopup="menu" id="base-ui-_r_4h_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(22, 163, 74)"}}></span>
                                  <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_4j_" aria-checked="true" aria-label="Toggle Personal">
                                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    {"Personal"}
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-hover:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Personal" aria-haspopup="menu" id="base-ui-_r_4p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                  <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_4r_" aria-checked="true" aria-label="Toggle Meetings">
                                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    {"Meetings"}
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-hover:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Meetings" aria-haspopup="menu" id="base-ui-_r_51_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                        <div role="listitem">
                          <Collapsible data-closed="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-start outline-none px-1.5 select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for nick@gmail.com" aria-disabled="false" aria-expanded="false">
                              <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <span className="truncate">
                                {"nick@gmail.com"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                {"2"}
                              </Badge>
                            </CollapsibleTrigger>
                            </Collapsible>
                          </Collapsible>
                        </div>
                      </div>
                      <div className="pt-1 px-1.5">
                        <Button className="justify-start px-2 text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add account"}
                        </Button>
                      </div>
                    </div>
                    <div className="border-b border-border py-2">
                      <div className="flex items-center justify-between px-3 py-1">
                        <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                          {"Up Next"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                          {"3"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-0.5 px-1.5" role="list">
                        <div role="listitem">
                          <Button className="gap-2.5 h-auto items-start px-3 py-2 text-left w-full" type="button" tabIndex="0">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                {"Weekly Team Standup"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"9:00 AM to 9:30 AM"}
                              </span>
                            </div>
                            <div className="-space-x-1 flex ml-auto">
                              <Avatar className="border-2 border-background size-5" size="default">
                                <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <Avatar className="border-2 border-background size-5" size="default">
                                <AvatarImage alt="ML" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <Avatar className="border-2 border-background size-5" size="default">
                                <AvatarImage alt="EP" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                            </div>
                          </Button>
                        </div>
                        <div role="listitem">
                          <Button className="gap-2.5 h-auto items-start px-3 py-2 text-left w-full" type="button" tabIndex="0">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                {"Design Review · Component Library v3"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"11:00 AM to 12:00 PM"}
                              </span>
                            </div>
                            <div className="-space-x-1 flex ml-auto">
                              <Avatar className="border-2 border-background size-5" size="default">
                                <AvatarImage alt="AP" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                            </div>
                          </Button>
                        </div>
                        <div role="listitem">
                          <Button className="gap-2.5 h-auto items-start px-3 py-2 text-left w-full" type="button" tabIndex="0">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                {"Coffee with Alex"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"2:00 PM to 2:30 PM"}
                              </span>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 grow px-3 py-3">
                      <Button className="justify-start w-full" type="button" tabIndex="0">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        {"New Event"}
                      </Button>
                      <Button className="justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                        <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                        </svg>
                        {"Share Availability"}
                      </Button>
                    </div>
                    <div className="border-border border-t flex gap-2 h-(--app-bottom-bar-height) items-center px-3 shrink-0">
                      <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-[11px] text-muted-foreground/60 truncate">
                          {"Your timezone"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"ET (-04:00) · America/New_York"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_49_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "239.61864406779662px"}}>
                  <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SidebarProvider>
  )
}
