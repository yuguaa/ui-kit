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
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
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
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
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
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div className="fixed h-0.5 inset-x-0 opacity-0 pointer-events-none top-0 will-change-[opacity] z-[9999]" aria-hidden="true" style={{transition: "opacity 350ms ease-out", opacity: "0"}}>
      <div className="bg-primary h-full w-0 will-change-[width]" style={{transition: "none", width: "0%"}}></div>
    </div>
    <SidebarProvider>
    <div className="[--header-height:45px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "63px", "--sidebar-width-icon": "3rem", "--sidebar-width-inner": "200px"}}>
      <a className="focus:bg-background focus:fixed focus:font-medium focus:not-sr-only focus:outline-none focus:px-3 focus:py-1.5 focus:ring-[3px] focus:ring-ring/50 focus:rounded-md focus:shadow-md focus:start-4 focus:text-foreground focus:text-sm focus:top-2.5 focus:z-100 sr-only" href="#main-content">
        {"Skip to content"}
      </a>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="gap-2 items-center justify-center p-2 py-3" sidebar="header">
              <a className="focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-md" aria-label="NeUI Drive, go to My Drive" href="/">
                <Item className="[a]:hover:bg-muted bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                    <svg className="size-3.5" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                    </svg>
                  </ItemMedia>
                </Item>
              </a>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <SidebarProvider>
              <SidebarGroup className="p-2" sidebar="group">
                <SidebarProvider>
                <SidebarGroupContent className="justify-center text-sm" sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Drive" id="base-ui-_R_3pl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
                        <svg className="lucide lucide-hard-drive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 16h.01"></path>
                          <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <path d="M21.946 12.013H2.054"></path>
                          <path d="M6 16h.01"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Workspace" id="base-ui-_R_3ql9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings/workspace">
                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Pricing" id="base-ui-_R_3rl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/pricing">
                        <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                          <line x1={2} x2={22} y1={10} y2={10}></line>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Settings" id="base-ui-_R_3sl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings" data-active="">
                        <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx={12} cy={12} r={3}></circle>
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
            <SidebarFooter className="gap-2 p-2" sidebar="footer">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile for Alex Rivera" aria-haspopup="menu" id="base-ui-_R_dt9flb_" aria-expanded="false">
                <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-6" size="default">
                  <AvatarImage className="rounded-full" alt="Alex Rivera" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarFooter>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm overflow-hidden shadow-none">
        <header className="[scrollbar-gutter:stable] bg-sidebar border-b border-border dark:bg-background flex gap-2 h-(--header-height) items-center lg:ps-2 overflow-y-hidden px-4 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-2 items-center md:flex-none min-w-0">
            <SidebarProvider>
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <Breadcrumb className="flex-1 min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-1 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1 min-w-9">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center min-w-0 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                    <span className="inline-flex items-center justify-center leading-none shrink-0 size-3">
                      <svg className="block size-full" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <defs>
                          <lineargradient id="ws-neui" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4f46e5"></stop>
                            <stop offset="50%" stopColor="#6366f1"></stop>
                            <stop offset="100%" stopColor="#818cf8"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx={14} cy={14} r={14} fill="url(#ws-neui)"></circle>
                      </svg>
                    </span>
                    <span className="max-w-24 sm:max-w-none truncate">
                      {"NeUI"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0" role="presentation" aria-hidden="true">
                  {"/"}
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1 shrink-0">
                  <BreadcrumbPage className="font-normal px-2 text-foreground text-sm truncate" role="link" aria-disabled="true" aria-current="page">
                    {"Profile"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Help" baseUiClickTrigger="" id="base-ui-_R_1tjpflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx={12} cy={12} r={10}></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_R_1ujpflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
            </SheetTrigger>
            </Sheet>
          </div>
        </header>
        <div className="[scrollbar-gutter:stable] flex flex-1 flex-col focus:outline-none min-h-0 overflow-y-auto" id="main-content" tabIndex={-1}>
          <div className="flex justify-center p-4 sm:p-6 w-full">
            <div className="max-w-4xl space-y-8 w-full">
              <header>
                <h1 className="font-semibold text-xl tracking-tight">
                  {"Account Settings"}
                </h1>
                <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
                  {"Update your account, workspace, team, and billing."}
                </p>
              </header>
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-8 w-full">
                <nav className="lg:shrink-0 lg:w-40 min-w-0" aria-label="Account settings">
                  <div className="-mx-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] flex gap-1 lg:flex-col lg:mx-0 lg:overflow-x-visible lg:pb-0 lg:px-0 overflow-x-auto pb-1 px-1">
                    <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-muted border border-transparent dark:border-input focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-3 inline-flex items-center justify-start px-3 py-1.5 rounded-md text-foreground text-sm transition-all w-full whitespace-nowrap" aria-current="page" href="/settings">
                      <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx={12} cy={7} r={4}></circle>
                      </svg>
                      <span className="truncate">
                        {"Profile"}
                      </span>
                    </a>
                    <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-transparent focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-3 hover:text-foreground inline-flex items-center justify-start px-3 py-1.5 rounded-md text-foreground/60 text-sm transition-all w-full whitespace-nowrap" href="/settings/workspace">
                      <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                      <span className="truncate">
                        {"Workspace"}
                      </span>
                    </a>
                    <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-transparent focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-3 hover:text-foreground inline-flex items-center justify-start px-3 py-1.5 rounded-md text-foreground/60 text-sm transition-all w-full whitespace-nowrap" href="/settings/team">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx={9} cy={7} r={4}></circle>
                      </svg>
                      <span className="truncate">
                        {"Team"}
                      </span>
                    </a>
                    <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-transparent focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-3 hover:text-foreground inline-flex items-center justify-start px-3 py-1.5 rounded-md text-foreground/60 text-sm transition-all w-full whitespace-nowrap" href="/settings/billing">
                      <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                        <line x1={2} x2={22} y1={10} y2={10}></line>
                      </svg>
                      <span className="truncate">
                        {"Billing"}
                      </span>
                    </a>
                  </div>
                </nav>
                <div className="flex-1 min-w-0">
                  <div className="space-y-4">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px-adjust:--spacing(2)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px-adjust:--spacing(2)] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px-adjust:--spacing(2)] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py-adjust:--spacing(0.5)] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)]" spacing="sm">
                      <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                        <div className="capitalize font-semibold text-sm">
                          {"Profile details"}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {"Personal account info."}
                        </div>
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0">
                        <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-photo">
                                  <span className="capitalize">
                                    {"Profile photo"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Shown in comments and mentions."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <div className="flex flex-wrap gap-2 grow items-center justify-start">
                                  <div className="relative">
                                    <Avatar className="after:rounded-full border data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-10" size="default">
                                      <AvatarImage className="rounded-full" alt="Alex Rivera" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </div>
                                  <div className="inline-flex relative">
                                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0} aria-haspopup="dialog">
                                      <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 3v12"></path>
                                        <path d="m17 8-5-5-5 5"></path>
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                      </svg>
                                      {"Change"}
                                    </Button>
                                    <input className="sr-only" id="profile-photo" accept="image/*" aria-label="Upload profile photo" tabIndex={-1} type="file" />
                                  </div>
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                                    <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M18 6 6 18"></path>
                                      <path d="m6 6 12 12"></path>
                                    </svg>
                                    {"Remove"}
                                  </Button>
                                </div>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-name">
                                  <span className="capitalize">
                                    {"Full name"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Used across NeUI."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="profile-name" autoComplete="name" value="Alex Rivera"></Input>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-email">
                                  <span className="capitalize">
                                    {"Email address"}
                                  </span>
                                </FieldLabel>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  {"Verified"}
                                </Badge>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Primary sign-in email."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="profile-email" inputmode="email" autoComplete="email" type="email" value="alex.rivera@neui.io"></Input>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center leading-snug text-sm">
                                  <span className="capitalize">
                                    {"Phone number"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Recovery and urgent alerts."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <div className="PhoneInput flex w-full">
                                  <ComboboxTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border border-e-0 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus:z-10 font-medium gap-1 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-transparent hover:text-foreground items-center justify-center leading-none outline-none px-2.5 py-0 rounded-e-none rounded-lg rounded-s-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_gs_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                                    <span className="sr-only">
                                      {"United States"}
                                    </span>
                                    <span className="[&_svg:not([class*='size-'])]:rounded-[5px] [&_svg:not([class*='size-'])]:size-full! flex h-4 items-center justify-center w-4">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342">
                                        <title>
                                          {"US"}
                                        </title>
                                        <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                        <path d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z" fill="#D80027"></path>
                                        <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                        <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" fill="#FFF"></path>
                                      </svg>
                                    </span>
                                  </ComboboxTrigger>
                                  <input id="base-ui-_r_gs_-hidden-input" tabIndex={-1} aria-hidden="true" value="US" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <Input className="PhoneInputInput aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus:z-1 h-8 md:text-sm outline-none! px-2.5 py-1 ring-none! rounded-lg rounded-s-none text-base transition-colors" id="base-ui-_r_gv_" autoComplete="tel" placeholder="Enter phone number" type="tel" value="+1 718 555 0188"></Input>
                                </div>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-username">
                                  <span className="capitalize">
                                    {"Username"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Used in mentions and links."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                  <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                    <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex gap-2 items-center text-muted-foreground text-sm">
                                      {"@"}
                                    </span>
                                  </InputGroupAddon>
                                  <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="profile-username" autoComplete="username" autocapitalize="none" spellCheck="false" value="alexrivera" />
                                </InputGroup>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center leading-snug text-sm">
                                  <span className="capitalize">
                                    {"Public details"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Shown across NeUI."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[32rem] gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <FieldSet className="gap-3 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 w-full">
                                  <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                                    {"Public details"}
                                  </FieldLegend>
                                  <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                                    {"Public profile and workspace defaults."}
                                  </FieldDescription>
                                  <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-3">
                                    <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-role">
                                        {"Role"}
                                      </FieldLabel>
                                      <Select>
                                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex={0} id="profile-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                        <SelectValue className="flex flex-1 text-left">
                                          {"Workspace Owner"}
                                        </SelectValue>
                                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                          {"▼"}
                                        </svg>
                                      </SelectTrigger>
                                      </Select>
                                      <input id="base-ui-_r_h1_-hidden-input" tabIndex={-1} aria-hidden="true" value="workspace-owner" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </Field>
                                    <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-timezone">
                                        {"Time zone"}
                                      </FieldLabel>
                                      <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="profile-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" value="(GMT-5) New York" />
                                          <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] pr-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-end">
                                            <button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group-has-data-[slot=combobox-clear]/input-group:hidden group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-[calc(var(--radius)-3px)] select-none shadow-none shrink-0 size-6 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6"></path>
                                              </svg>
                                            </button>
                                          </InputGroupAddon>
                                        </InputGroup>
                                        <input id="base-ui-_r_h4_-hidden-input" tabIndex={-1} aria-hidden="true" value="(GMT-5) New York" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </Field>
                                    </Field>
                                    <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-website">
                                        {"Website"}
                                      </FieldLabel>
                                      <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                        <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                          <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex gap-2 items-center text-muted-foreground text-sm">
                                            {"https://"}
                                          </span>
                                        </InputGroupAddon>
                                        <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="profile-website" inputmode="url" autoComplete="url" autocapitalize="none" spellCheck="false" value="neui.io" />
                                      </InputGroup>
                                    </Field>
                                  </FieldGroup>
                                </FieldSet>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-bio">
                                  <span className="capitalize">
                                    {"Bio"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Short profile summary."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] @md/field-group:w-full gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Textarea className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm min-h-24 px-2.5 py-2 resize-none rounded-lg text-base transition-colors" id="profile-bio">
                                  {"Runs the studio's shared drive: retention, sharing defaults, and who can reach what."}
                                </Textarea>
                              </div>
                            </FieldContent>
                          </Field>
                        </FieldGroup>
                      </FramePanel>
                      <footer className="flex flex-row gap-2 justify-end px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                          {"Cancel"}
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex={0}>
                          {"Save changes"}
                        </Button>
                      </footer>
                    </Frame>
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px-adjust:--spacing(2)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px-adjust:--spacing(2)] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px-adjust:--spacing(2)] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py-adjust:--spacing(0.5)] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)]" spacing="sm">
                      <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                        <div className="capitalize font-semibold text-sm">
                          {"Profile preferences"}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {"Default workspace behavior."}
                        </div>
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0">
                        <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center leading-snug text-sm">
                                  <span className="capitalize">
                                    {"Language"}
                                  </span>
                                </FieldLabel>
                              </div>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_small]:hidden [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex={0} id="profile-language" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue className="flex flex-1 text-left">
                                      <span className="flex flex-col gap-px items-start">
                                        <span className="font-medium">
                                          {"English (US)"}
                                        </span>
                                        <small className="text-muted-foreground text-sm">
                                          {"Default product language"}
                                        </small>
                                      </span>
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      {"▼"}
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_ha_-hidden-input" tabIndex={-1} aria-hidden="true" value="en-us" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center leading-snug text-sm">
                                  <span className="capitalize">
                                    {"Landing view"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Which view the drive opens on."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_small]:hidden [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex={0} id="profile-landing-view" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue className="flex flex-1 text-left">
                                      <span className="flex flex-col gap-px items-start">
                                        <span className="font-medium">
                                          {"Favourites"}
                                        </span>
                                        <small className="text-muted-foreground text-sm">
                                          {"Only what you pinned"}
                                        </small>
                                      </span>
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      {"▼"}
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_hd_-hidden-input" tabIndex={-1} aria-hidden="true" value="starred" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center leading-snug text-sm">
                                  <span className="capitalize">
                                    {"Digest cadence"}
                                  </span>
                                </FieldLabel>
                              </div>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_small]:hidden [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex={0} id="profile-digest" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue className="flex flex-1 text-left">
                                      <span className="flex flex-col gap-px items-start">
                                        <span className="font-medium">
                                          {"Weekly summary"}
                                        </span>
                                        <small className="text-muted-foreground text-sm">
                                          {"Monday planning recap"}
                                        </small>
                                      </span>
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      {"▼"}
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_hg_-hidden-input" tabIndex={-1} aria-hidden="true" value="weekly" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="data-[invalid=true]:text-destructive gap-4 px-(--frame-panel-px) py-(--frame-panel-py)" role="group" data-orientation="responsive">
                            <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-daily-briefing" id="profile-daily-briefing-label">
                                  <span className="capitalize">
                                    {"Daily briefing"}
                                  </span>
                                </FieldLabel>
                              </div>
                              <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                {"Morning recap before meetings."}
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 gap-0.5 min-w-0 w-full">
                              <div className="@md/field-group:justify-end flex justify-start w-full">
                                <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex={0} id="base-ui-_r_hj_" aria-checked="true" size="default" aria-labelledby="profile-daily-briefing-label">
                                  <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                </Switch>
                                <input id="profile-daily-briefing" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </FieldContent>
                          </Field>
                        </FieldGroup>
                      </FramePanel>
                      <footer className="flex flex-row gap-2 justify-end px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                          {"Cancel"}
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex={0}>
                          {"Save changes"}
                        </Button>
                      </footer>
                    </Frame>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
