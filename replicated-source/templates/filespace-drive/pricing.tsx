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
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
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
  <>
    <div className="fixed h-0.5 inset-x-0 opacity-0 pointer-events-none top-0 will-change-[opacity] z-[9999]" aria-hidden="true" style={{transition: "opacity 350ms ease-out", opacity: "0"}}>
      <div className="bg-primary h-full w-0 will-change-[width]" style={{transition: "none", width: "0%"}}></div>
    </div>
    <div className="[--header-height:45px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "63px", "--sidebar-width-icon": "3rem", "--sidebar-width-inner": "200px"}}>
      <a className="focus:bg-background focus:fixed focus:font-medium focus:not-sr-only focus:outline-none focus:px-3 focus:py-1.5 focus:ring-[3px] focus:ring-ring/50 focus:rounded-md focus:shadow-md focus:start-4 focus:text-foreground focus:text-sm focus:top-2.5 focus:z-100 sr-only" href="#main-content">
        Skip to content
      </a>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="gap-2 items-center justify-center p-2 py-3" sidebar="header">
              <a className="focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-md" aria-label="NeUI Drive, go to My Drive" href="/">
                <Item className="[a]:hover:bg-muted bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                    <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                    </svg>
                  </ItemMedia>
                </Item>
              </a>
            </SidebarHeader>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <SidebarGroup className="p-2" sidebar="group">
                <SidebarGroupContent className="justify-center text-sm" sidebar="group-content">
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Drive" id="base-ui-_R_3pl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
                        <svg className="lucide lucide-hard-drive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 16h.01"></path>
                          <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <path d="M21.946 12.013H2.054"></path>
                          <path d="M6 16h.01"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Workspace" id="base-ui-_R_3ql9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings/workspace">
                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Pricing" id="base-ui-_R_3rl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/pricing" data-active="">
                        <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Settings" id="base-ui-_R_3sl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings">
                        <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="gap-2 p-2" sidebar="footer">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Alex Rivera" aria-haspopup="menu" id="base-ui-_R_dt9flb_" aria-expanded="false">
                <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-6" size="default">
                  <AvatarImage className="rounded-full" alt="Alex Rivera" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarFooter>
          </div>
        </div>
      </Sidebar>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm overflow-hidden shadow-none">
        <header className="[scrollbar-gutter:stable] bg-sidebar border-b border-border dark:bg-background flex gap-2 h-(--header-height) items-center lg:ps-2 overflow-y-hidden px-4 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-2 items-center md:flex-none min-w-0">
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
            <Breadcrumb className="flex-1 min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-1 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1 min-w-9">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center min-w-0 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                    <span className="inline-flex items-center justify-center leading-none shrink-0 size-3">
                      <svg className="block size-full" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <defs>
                          <lineargradient id="ws-neui" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4f46e5"></stop>
                            <stop offset="50%" stopColor="#6366f1"></stop>
                            <stop offset="100%" stopColor="#818cf8"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx="14" cy="14" r="14" fill="url(#ws-neui)"></circle>
                      </svg>
                    </span>
                    <span className="max-w-24 sm:max-w-none truncate">
                      NeUI
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0" role="presentation" aria-hidden="true">
                  /
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1 shrink-0">
                  <BreadcrumbPage className="font-normal px-2 text-foreground text-sm truncate" role="link" aria-disabled="true" aria-current="page">
                    Pricing
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Help" baseUiClickTrigger="" id="base-ui-_R_1tjpflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_R_1ujpflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
            </SheetTrigger>
            </Sheet>
          </div>
        </header>
        <div className="[scrollbar-gutter:stable] flex flex-1 flex-col focus:outline-none min-h-0 overflow-y-auto" id="main-content" tabIndex="-1">
          <div className="flex justify-center p-4 sm:p-6 w-full">
            <div className="max-w-4xl space-y-8 w-full">
              <header>
                <h1 className="font-semibold text-xl tracking-tight">
                  Plans
                </h1>
                <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
                  Seats and storage change the moment you switch. Nothing is charged in this template.
                </p>
              </header>
              <div className="space-y-4">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px-adjust:--spacing(2)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px-adjust:--spacing(2)] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px-adjust:--spacing(2)] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py-adjust:--spacing(0.5)] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] hidden lg:flex" spacing="sm">
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                    <div className="overflow-x-auto">
                      <div className="min-w-[46rem]">
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="bg-muted/30 border-border border-e flex flex-col gap-2 p-4">
                            <p className="font-medium text-foreground text-sm">
                              What each plan includes
                            </p>
                            <p className="leading-relaxed text-muted-foreground text-xs">
                              Every tier carries everything the tier before it does, so a row ticked for Team is ticked for Business too.
                            </p>
                          </div>
                          <div className="border-border border-e flex flex-col items-center px-5 py-8 relative text-center">
                            <h3 className="font-semibold text-base text-foreground">
                              Free
                            </h3>
                            <p className="leading-relaxed max-w-[180px] mt-1 text-muted-foreground text-xs">
                              For trying the studio out on your own.
                            </p>
                            <div className="flex gap-1.5 items-baseline justify-center mt-5">
                              <span className="font-bold tabular-nums text-3xl text-foreground tracking-tight">
                                $0
                              </span>
                              <span className="font-medium text-muted-foreground text-xs">
                                Forever
                              </span>
                            </div>
                            <p className="mt-2 text-muted-foreground text-xs">
                              No card required
                            </p>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent cursor-default dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 mt-5 px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" disabled="" tabIndex="0" disabled aria-current="true">
                              Current plan
                            </Button>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex flex-col items-center px-5 py-8 relative text-center">
                            <Badge className="-top-px -translate-x-1/2 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 left-1/2 min-w-5 outline-none px-1.25 py-0.5 rounded-sm rounded-t-none text-[11px] text-primary-foreground transition-shadow">
                              Most popular
                            </Badge>
                            <h3 className="font-semibold text-base text-foreground">
                              Team
                            </h3>
                            <p className="leading-relaxed max-w-[180px] mt-1 text-muted-foreground text-xs">
                              A small studio with shared folders.
                            </p>
                            <div className="flex gap-1.5 items-baseline justify-center mt-5">
                              <span className="font-bold tabular-nums text-3xl text-foreground tracking-tight">
                                $49
                              </span>
                              <span className="font-medium text-muted-foreground text-xs">
                                / month
                              </span>
                            </div>
                            <p className="mt-2 text-muted-foreground text-xs">
                              Billed monthly
                            </p>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 mt-5 px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                              Switch
                            </Button>
                          </div>
                          <div className="flex flex-col items-center px-5 py-8 relative text-center">
                            <h3 className="font-semibold text-base text-foreground">
                              Business
                            </h3>
                            <p className="leading-relaxed max-w-[180px] mt-1 text-muted-foreground text-xs">
                              Client work, with approvals and roles.
                            </p>
                            <div className="flex gap-1.5 items-baseline justify-center mt-5">
                              <span className="font-bold tabular-nums text-3xl text-foreground tracking-tight">
                                $149
                              </span>
                              <span className="font-medium text-muted-foreground text-xs">
                                / month
                              </span>
                            </div>
                            <p className="mt-2 text-muted-foreground text-xs">
                              Billed monthly
                            </p>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 mt-5 px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                              Switch
                            </Button>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Seats
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                              3
                            </Badge>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                              10
                            </Badge>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                              24
                            </Badge>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-hard-drive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M10 16h.01"></path>
                              <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                              <path d="M21.946 12.013H2.054"></path>
                              <path d="M6 16h.01"></path>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Storage
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                              1.00 GB
                            </Badge>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                              1.00 TB
                            </Badge>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                              2.00 TB
                            </Badge>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-link-2 lucide-link2 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                              <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                              <line x1="8" x2="16" y1="12" y2="12"></line>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Link sharing
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-rotate-ccw-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                              <path d="M3 3v5h5"></path>
                              <path d="M12 7v5l4 2"></path>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Version history
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-folders shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"></path>
                              <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"></path>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Shared drives
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-clipboard-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                              <path d="m9 14 2 2 4-4"></path>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Approval controls
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="border-b border-border grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-shield-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Access reviews
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-[minmax(8rem,1.2fr)_repeat(3,minmax(0,1fr))]">
                          <div className="border-border border-e flex gap-2.5 items-center px-4 py-3">
                            <svg className="lucide lucide-life-buoy shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m4.93 4.93 4.24 4.24"></path>
                              <path d="m14.83 9.17 4.24-4.24"></path>
                              <path d="m14.83 14.83 4.24 4.24"></path>
                              <path d="m9.17 14.83-4.24 4.24"></path>
                              <circle cx="12" cy="12" r="4"></circle>
                            </svg>
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Priority support
                            </span>
                          </div>
                          <div className="border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="bg-primary/2 border-border border-e flex items-center justify-center px-3 py-3">
                            <span className="flex items-center justify-center text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                Not included
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center justify-center px-3 py-3">
                            <span className="dark:text-success flex items-center justify-center text-success-foreground">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                Included
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px-adjust:--spacing(2)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px-adjust:--spacing(2)] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px-adjust:--spacing(2)] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py-adjust:--spacing(0.5)] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] lg:hidden" spacing="sm">
                  <header className="flex flex-col gap-0 px-(--frame-panel-header-px) py-6">
                    <div className="flex gap-2 items-center justify-between">
                      <div className="font-semibold text-lg">
                        Free
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-primary transition-shadow">
                        Current
                      </Badge>
                    </div>
                    <div className="mt-1 text-muted-foreground text-sm">
                      For trying the studio out on your own.
                    </div>
                    <div className="flex gap-1.5 items-baseline mt-4">
                      <span className="font-bold tabular-nums text-3xl text-foreground tracking-tight">
                        $0
                      </span>
                      <span className="font-medium text-muted-foreground text-sm">
                        Forever
                      </span>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent cursor-default dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 mt-5 px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" disabled="" tabIndex="0" disabled aria-current="true">
                      Current plan
                    </Button>
                    <p className="mt-3 text-center text-muted-foreground text-xs">
                      No card required
                    </p>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Seats
                        </span>
                      </div>
                      <div className="shrink-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                          3
                        </Badge>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-hard-drive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 16h.01"></path>
                          <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <path d="M21.946 12.013H2.054"></path>
                          <path d="M6 16h.01"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Storage
                        </span>
                      </div>
                      <div className="shrink-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                          1.00 GB
                        </Badge>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-link-2 lucide-link2 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                          <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                          <line x1="8" x2="16" y1="12" y2="12"></line>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Link sharing
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-rotate-ccw-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M12 7v5l4 2"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Version history
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-folders shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"></path>
                          <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Shared drives
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-clipboard-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <path d="m9 14 2 2 4-4"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Approval controls
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-shield-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Access reviews
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-life-buoy shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Priority support
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px-adjust:--spacing(2)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px-adjust:--spacing(2)] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px-adjust:--spacing(2)] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py-adjust:--spacing(0.5)] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] lg:hidden" spacing="sm">
                  <header className="flex flex-col gap-0 px-(--frame-panel-header-px) py-6">
                    <div className="flex gap-2 items-center justify-between">
                      <div className="font-semibold text-lg">
                        Team
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-primary-foreground transition-shadow">
                        Most popular
                      </Badge>
                    </div>
                    <div className="mt-1 text-muted-foreground text-sm">
                      A small studio with shared folders.
                    </div>
                    <div className="flex gap-1.5 items-baseline mt-4">
                      <span className="font-bold tabular-nums text-3xl text-foreground tracking-tight">
                        $49
                      </span>
                      <span className="font-medium text-muted-foreground text-sm">
                        / month
                      </span>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 mt-5 px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                      Switch
                    </Button>
                    <p className="mt-3 text-center text-muted-foreground text-xs">
                      Billed monthly
                    </p>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Seats
                        </span>
                      </div>
                      <div className="shrink-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                          10
                        </Badge>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-hard-drive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 16h.01"></path>
                          <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <path d="M21.946 12.013H2.054"></path>
                          <path d="M6 16h.01"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Storage
                        </span>
                      </div>
                      <div className="shrink-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                          1.00 TB
                        </Badge>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-link-2 lucide-link2 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                          <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                          <line x1="8" x2="16" y1="12" y2="12"></line>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Link sharing
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-rotate-ccw-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M12 7v5l4 2"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Version history
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-folders shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"></path>
                          <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Shared drives
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-clipboard-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <path d="m9 14 2 2 4-4"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Approval controls
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-shield-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Access reviews
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-life-buoy shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Priority support
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="flex items-center justify-center text-muted-foreground/80">
                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span className="sr-only">
                            Not included
                          </span>
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px-adjust:--spacing(2)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px-adjust:--spacing(2)] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px-adjust:--spacing(2)] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py-adjust:--spacing(0.5)] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] lg:hidden" spacing="sm">
                  <header className="flex flex-col gap-0 px-(--frame-panel-header-px) py-6">
                    <div className="flex gap-2 items-center justify-between">
                      <div className="font-semibold text-lg">
                        Business
                      </div>
                    </div>
                    <div className="mt-1 text-muted-foreground text-sm">
                      Client work, with approvals and roles.
                    </div>
                    <div className="flex gap-1.5 items-baseline mt-4">
                      <span className="font-bold tabular-nums text-3xl text-foreground tracking-tight">
                        $149
                      </span>
                      <span className="font-medium text-muted-foreground text-sm">
                        / month
                      </span>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 mt-5 px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                      Switch
                    </Button>
                    <p className="mt-3 text-center text-muted-foreground text-xs">
                      Billed monthly
                    </p>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Seats
                        </span>
                      </div>
                      <div className="shrink-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                          24
                        </Badge>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-hard-drive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 16h.01"></path>
                          <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <path d="M21.946 12.013H2.054"></path>
                          <path d="M6 16h.01"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Storage
                        </span>
                      </div>
                      <div className="shrink-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-md tabular-nums text-foreground text-sm transition-shadow">
                          2.00 TB
                        </Badge>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-link-2 lucide-link2 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                          <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                          <line x1="8" x2="16" y1="12" y2="12"></line>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Link sharing
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-rotate-ccw-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M12 7v5l4 2"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Version history
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-folders shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"></path>
                          <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Shared drives
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-clipboard-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <path d="m9 14 2 2 4-4"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Approval controls
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-border flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-shield-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Access reviews
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-2.5">
                      <div className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-life-buoy shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <span className="min-w-0 text-foreground text-sm truncate">
                          Priority support
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="dark:text-success flex items-center justify-center text-success-foreground">
                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <span className="sr-only">
                            Included
                          </span>
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
