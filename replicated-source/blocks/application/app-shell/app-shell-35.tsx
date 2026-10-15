import {
  Avatar,
  AvatarGroup,
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
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { DrawerTrigger } from "@/registry/bases/base/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 overflow-hidden text-foreground w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <div className="border-r hidden md:flex">
        <Sidebar className="bg-muted w-12" role="navigation" aria-label="Sections">
          <SidebarHeader className="border-b h-12 items-center justify-center p-0" sidebar="header">
            <a className="flex items-center shrink-0 text-foreground" href="#" aria-label="NeUI home">
              <svg className="h-7 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
                <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
                <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
              </svg>
            </a>
          </SidebarHeader>
          <SidebarContent className="[--scroll-fade-reveal:--spacing(4)] gap-2 px-2 py-2.5 scroll-fade-y" sidebar="content">
            <SidebarGroup className="p-0" sidebar="group">
              <SidebarMenu className="gap-2 items-center" sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" aria-current="page" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                    <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                    <span className="sr-only">
                      Boards
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-layout-template" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutTemplateIcon" tabler="IconTemplate" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiLayout2Line" aria-hidden="true">
                      <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                      <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                      <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                    </svg>
                    <span className="sr-only">
                      Templates
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M12 7v5l4 2"></path>
                    </svg>
                    <span className="sr-only">
                      Recent
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="sr-only">
                      Starred
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span className="sr-only">
                      Shared
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarSeparator className="-mb-px bg-ring/50 data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-auto shrink-0 w-5!" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
            <SidebarGroup className="p-0" sidebar="group">
              <SidebarMenu className="gap-2 items-center" sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                    <span className="sr-only">
                      Projects
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersRoundIcon" tabler="IconUsersGroup" hugeicons="UserGroupIcon" phosphor="UsersThreeIcon" remixicon="RiTeamLine" aria-hidden="true">
                      <path d="M18 21a8 8 0 0 0-16 0"></path>
                      <circle cx="10" cy="8" r="5"></circle>
                      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                    </svg>
                    <span className="sr-only">
                      Teams
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="sr-only">
                      Tags
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                      <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                      <path d="M10 12h4"></path>
                    </svg>
                    <span className="sr-only">
                      Archive
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    <span className="sr-only">
                      Trash
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="gap-2 items-center px-2 py-2" sidebar="footer">
            <SidebarMenu className="gap-2 items-center" sidebar="menu">
              <SidebarMenuItem sidebar="menu-item">
                <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-muted-foreground" href="#" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                  <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span className="sr-only">
                    Help
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem sidebar="menu-item">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Sienna Wells" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                  <Avatar className="rounded-md size-7" size="sm">
                    <AvatarImage className="rounded-md" alt="Sienna Wells" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                  </Avatar>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </div>
      <SidebarInset className="min-h-0 min-w-0">
        <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
          <header className="bg-background border-b flex gap-2 h-12 items-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-4 px-3 shrink-0">
            <div className="flex gap-3 items-center min-w-0">
              <a className="flex items-center md:hidden shrink-0 text-foreground" href="#" aria-label="NeUI home">
                <svg className="h-7 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
                  <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
                  <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
                </svg>
              </a>
              <div className="-mx-1.5 flex items-center lg:hidden">
                <Button className="md:hidden" type="button" tabIndex="0" aria-label="Open navigation" aria-expanded="false">
                  <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                </Button>
                <DrawerTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Board views: Board" baseUiClickTrigger="" id="base-ui-_r_t_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                    <path d="M4 5h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 19h16"></path>
                  </svg>
                </DrawerTrigger>
              </div>
              <Breadcrumb className="max-[23.75rem]:hidden min-w-0" aria-label="breadcrumb">
                <BreadcrumbList className="flex-nowrap">
                  <BreadcrumbItem className="max-sm:hidden">
                    <BreadcrumbLink href="#">
                      Boards
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="max-sm:hidden" role="presentation" aria-hidden="true">
                    <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="min-w-0">
                    <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                      Launch Map
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <TabsList className="bg-input/30 h-7 inset-ring inset-ring-ring/20 max-lg:hidden p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Board views">
              <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_u_" compositeItemActive="">
                Board
              </TabsTrigger>
              <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_v_">
                Outline
              </TabsTrigger>
              <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_10_">
                Comments
              </TabsTrigger>
              <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_11_">
                Activity
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-2 items-center lg:justify-self-end ms-auto">
              <AvatarGroup role="group" aria-label="Editing now: Mira Stone, Leo Grant, Nora Vale">
                <Avatar size="sm">
                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </AvatarGroup>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" data-icon="inline-start" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                <span className="max-md:sr-only">
                  Share
                </span>
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <span className="max-md:sr-only">
                  Export
                </span>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Board options" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </header>
          <main className="@container flex flex-1 flex-col lg:p-4 min-h-0 overflow-y-auto p-3">
            <div className="flex flex-col gap-6" aria-hidden="true">
              <div className="@4xl:grid-cols-4 @xl:grid-cols-2 gap-6 grid">
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-24">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-24">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-24">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-24">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
              </div>
              <div className="@2xl:grid-cols-2 gap-6 grid">
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </Tabs>
      </SidebarInset>
    </div>
  )
}
