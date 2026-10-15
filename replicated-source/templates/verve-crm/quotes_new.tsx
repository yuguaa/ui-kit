import {
  Avatar,
  AvatarBadge,
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
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Kbd,
  KbdGroup,
} from "@/registry/bases/base/ui/kbd"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div hidden></div>
    <div className="fixed h-0.5 inset-x-0 opacity-0 pointer-events-none top-0 will-change-[opacity] z-[9999]" aria-hidden="true" style={{transition: "opacity 350ms ease-out", opacity: "0"}}>
      <div className="bg-primary h-full w-0 will-change-[width]" style={{transition: "none", width: "0%"}}></div>
    </div>
    <div className="[--header-height:50px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "63px", "--sidebar-width-icon": "3rem"}}>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <div className="flex grow h-full">
              <div className="flex flex-col h-full">
                <SidebarHeader className="gap-2 items-center justify-center p-2 py-3" sidebar="header">
                  <Item className="[a]:hover:bg-muted bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                      <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </SidebarHeader>
                <SidebarContent className="flex-row gap-0 md:flex-col no-scrollbar" sidebar="content">
                  <SidebarGroup className="p-2" sidebar="group">
                    <SidebarGroupContent className="justify-center text-sm" sidebar="group-content">
                      <SidebarMenu className="gap-0.5" sidebar="menu">
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1kpj5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1l9j5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                            <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1lpj5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1m9j5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1mpj5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1n9j5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
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
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_R_1tj5ulb_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-6" size="default">
                      <AvatarImage className="rounded-full" alt="Nick Bold" src="/avatars/002cb8910d.jpg"></AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </div>
              <div className="border-border/60 border-l flex flex-1 flex-col grow md:hidden overflow-hidden">
                <div className="grow max-h-full min-h-0">
                  <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_R_6j5ulb_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                      <nav className="flex flex-col py-1">
                        <div>
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                            Deals
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/pipeline">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                </svg>
                              </span>
                              <span className="truncate">
                                Deal Board
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/forecast">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Forecast
                              </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                            Sales
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" aria-current="page" href="/quotes">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Quotes
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/products">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-boxes" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                                  <path d="m7 16.5-4.74-2.85"></path>
                                  <path d="m7 16.5 5-3"></path>
                                  <path d="M7 16.5v5.17"></path>
                                  <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                                  <path d="m17 16.5-5-3"></path>
                                  <path d="m17 16.5 4.74-2.85"></path>
                                  <path d="M17 16.5v5.17"></path>
                                  <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                                  <path d="M12 8 7.26 5.15"></path>
                                  <path d="m12 8 4.74-2.85"></path>
                                  <path d="M12 13.5V8"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Products
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/approvals">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Approvals
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                4
                              </Badge>
                            </a>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </ScrollArea>
                </div>
                <div className="shrink-0">
                  <div className="p-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 group/button h-auto has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-1 py-1.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Members. Selected: Nadia Farrell" aria-haspopup="menu" id="base-ui-_R_6qj5ulb_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                        <AvatarImage className="rounded-full" alt="" src="/avatars/4c0e4bd47b.jpg"></AvatarImage>
                        <AvatarBadge className="bg-success group-data-[size=sm]/avatar:size-1.5 ring-1 ring-background text-primary-foreground"></AvatarBadge>
                      </Avatar>
                      <span className="font-medium text-foreground text-xs truncate">
                        Nadia Farrell
                      </span>
                      <svg className="lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <div className="border-border border-t p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground text-xs">
                        Quarterly Quota
                      </p>
                    </div>
                    <p className="leading-snug text-[11px] text-muted-foreground">
                      Closed-won against the Q3 team target
                    </p>
                    <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                      <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 0, transparent 4px)"}}></div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="74" aria-valuetext="74%" role="progressbar">
                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0", height: "inherit", width: "74%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}}>
                          x
                        </span>
                      </Progress>
                    </div>
                    <div className="flex items-center justify-between leading-none text-[11px]">
                      <div className="flex gap-1 items-center">
                        <span className="font-semibold tabular-nums text-foreground">
                          74
                          %
                        </span>
                        <span className="text-muted-foreground">
                          Closed
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="font-semibold tabular-nums text-foreground">
                          26
                          %
                        </span>
                        <span className="text-muted-foreground">
                          To go
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
      <button className="-translate-y-1/2 cursor-pointer fixed focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 hidden items-center lg:flex outline-none pl-2 top-1/2 w-7 z-30" type="button" aria-label="Collapse inner sidebar" style={{left: "calc(var(--sidebar-width-inner) + var(--sidebar-width))"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          Collapse
        </span>
      </button>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm overflow-hidden shadow-none">
        <header className="bg-background border-b border-border flex gap-2 h-(--header-height) items-center md:ps-0 pe-2 ps-2.5 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-1.5 items-center md:flex-none">
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList className="gap-0.5 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_r5f5ulb_" aria-expanded="false">
                    <span className="inline-flex items-center justify-center leading-none shrink-0 size-3">
                      <svg className="block size-full" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <defs>
                          <lineargradient id="ws-acme" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4f46e5"></stop>
                            <stop offset="35%" stopColor="#7c3aed"></stop>
                            <stop offset="70%" stopColor="#a21caf"></stop>
                            <stop offset="100%" stopColor="#db2777"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx="14" cy="14" r="14" fill="url(#ws-acme)"></circle>
                      </svg>
                    </span>
                    <span className="leading-none sm:not-sr-only sr-only">
                      Acme Inc
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 text-xs" role="presentation" aria-hidden="true">
                  /
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_v5f5ulb_" aria-expanded="false">
                    <span className="hidden sm:inline">
                      CRM
                    </span>
                    <span className="sm:hidden">
                      CRM
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center md:-translate-x-1/2 md:absolute md:left-1/2 ml-auto">
            <ButtonGroup className="[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border border-r-0 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Search scope" aria-haspopup="menu" id="base-ui-_R_6pf5ulb_" aria-expanded="false">
                All
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/30 outline-none rounded-4xl w-80" type="button" aria-label="Search">
                <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 pointer-events-none rounded-l-none rounded-lg transition-colors" role="group">
                  <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                    <svg className="lucide lucide-search opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex flex-1 font-normal gap-2 items-center ps-1.5 text-muted-foreground text-sm">
                    Search...
                  </span>
                  <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] pr-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-end" aria-hidden="true">
                    <KbdGroup className="gap-1">
                      <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background min-w-5 px-1 rounded-sm text-muted-foreground text-xs w-fit">
                        ⌘
                      </Kbd>
                      <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background min-w-5 px-1 rounded-sm text-muted-foreground text-xs w-fit">
                        K
                      </Kbd>
                    </KbdGroup>
                  </InputGroupAddon>
                </InputGroup>
              </button>
            </ButtonGroup>
          </div>
          <div className="flex gap-1 items-center ml-auto">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center max-sm:px-0 max-sm:size-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6tf5ulb_" aria-expanded="false">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="hidden sm:inline">
                Create
              </span>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_R_rdf5ulb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
            </SheetTrigger>
            </Sheet>
          </div>
        </header>
        <DialogHeader className="gap-2 sr-only">
          <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_bef5ulb_">
            Search
          </DialogTitle>
          <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_jef5ulb_">
            Search your workspace content.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-1 flex-col grow md:flex-row overflow-hidden">
          <aside className="border-border border-r duration-300 ease-in-out hidden md:flex overflow-hidden relative shrink-0 transition-[width] w-(--sidebar-width-inner)" aria-label="Pipeline navigation">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)">
              <div className="grow max-h-full min-h-0">
                <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_R_ln5ulb_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <nav className="flex flex-col py-1">
                      <div>
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                          Deals
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/pipeline">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                              </svg>
                            </span>
                            <span className="truncate">
                              Deal Board
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/forecast">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Forecast
                            </span>
                          </a>
                        </div>
                      </div>
                      <div>
                        <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                          Sales
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" aria-current="page" href="/quotes">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Quotes
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/products">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-boxes" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                                <path d="m7 16.5-4.74-2.85"></path>
                                <path d="m7 16.5 5-3"></path>
                                <path d="M7 16.5v5.17"></path>
                                <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                                <path d="m17 16.5-5-3"></path>
                                <path d="m17 16.5 4.74-2.85"></path>
                                <path d="M17 16.5v5.17"></path>
                                <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                                <path d="M12 8 7.26 5.15"></path>
                                <path d="m12 8 4.74-2.85"></path>
                                <path d="M12 13.5V8"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Products
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/approvals">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Approvals
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                              4
                            </Badge>
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </ScrollArea>
              </div>
              <div className="shrink-0">
                <div className="p-3">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 group/button h-auto has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-1 py-1.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Members. Selected: Nadia Farrell" aria-haspopup="menu" id="base-ui-_R_r5n5ulb_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="" src="/avatars/4c0e4bd47b.jpg"></AvatarImage>
                      <AvatarBadge className="bg-success group-data-[size=sm]/avatar:size-1.5 ring-1 ring-background text-primary-foreground"></AvatarBadge>
                    </Avatar>
                    <span className="font-medium text-foreground text-xs truncate">
                      Nadia Farrell
                    </span>
                    <svg className="lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
                <div className="border-border border-t p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground text-xs">
                      Quarterly Quota
                    </p>
                  </div>
                  <p className="leading-snug text-[11px] text-muted-foreground">
                    Closed-won against the Q3 team target
                  </p>
                  <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                    <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 0, transparent 4px)"}}></div>
                    <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="74" aria-valuetext="74%" role="progressbar">
                      <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                        <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0", height: "inherit", width: "74%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}}>
                        x
                      </span>
                    </Progress>
                  </div>
                  <div className="flex items-center justify-between leading-none text-[11px]">
                    <div className="flex gap-1 items-center">
                      <span className="font-semibold tabular-nums text-foreground">
                        74
                        %
                      </span>
                      <span className="text-muted-foreground">
                        Closed
                      </span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="font-semibold tabular-nums text-foreground">
                        26
                        %
                      </span>
                      <span className="text-muted-foreground">
                        To go
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute cursor-col-resize flex group/resize inset-y-0 justify-end right-0 touch-none w-2 z-20" role="separator" aria-orientation="vertical" aria-label="Resize sidebar">
              <span className="bg-transparent group-hover/resize:bg-ring/50 h-full transition-colors w-px" aria-hidden="true"></span>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="@container flex flex-col gap-3 max-w-7xl mx-auto text-foreground w-full">
              <h1 className="sr-only">
                New quote
              </h1>
              <div>
                <a className="-ms-2 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all whitespace-nowrap" href="/quotes">
                  <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  Back to quotes
                </a>
              </div>
              <section aria-label="Quote">
                <div className="flex flex-col w-full">
                  <header className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between" aria-label="Quote toolbar">
                    <div className="min-w-0">
                      <h2 className="font-semibold leading-5 text-sm truncate">
                        Create quote
                      </h2>
                      <p className="leading-4 line-clamp-1 text-muted-foreground text-xs">
                        Price line items from the catalog and send for approval.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center lg:justify-end lg:w-auto w-full" role="group" aria-label="Quote actions">
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hidden hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg md:inline-flex px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                        <svg className="lucide lucide-megaphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                          <path d="M8 6v8"></path>
                        </svg>
                        Feedback
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hidden hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] sm:inline-flex text-[0.8rem]" type="button" tabIndex="0">
                        <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                          <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                          <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                        </svg>
                        Save draft
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground" type="submit" tabIndex="0" form="form-3-invoice-creator">
                        <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                          <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        Send quote
                      </Button>
                    </div>
                  </header>
                  <main className="flex flex-1 pt-5">
                    <form className="w-full" id="form-3-invoice-creator" novalidate="">
                      <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                        <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 px-5 py-5 rounded-t-xl sm:px-6">
                          <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-base">
                            Quote Details
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-sm">
                            Account, terms, line items, and notes.
                          </CardDescription>
                          <CardAction className="flex gap-1.5 items-center self-center">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                              <svg className="lucide lucide-receipt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 17V7"></path>
                                <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                                <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                              </svg>
                              Draft
                            </Badge>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm sm:inline-flex text-primary text-xs transition-shadow">
                              USD
                            </Badge>
                          </CardAction>
                        </CardHeader>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <CardContent className="flex flex-col gap-7 px-5 py-5 sm:px-6 sm:py-6">
                          <FieldSet className="gap-0 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3">
                            <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                              Quote form
                            </FieldLegend>
                            <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                              Build a quote against a deal, with terms, line items and notes.
                            </FieldDescription>
                            <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-7">
                              <section className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <div className="flex flex-wrap gap-2 items-center">
                                      <h2 className="font-semibold leading-6 text-base text-foreground">
                                        Customer
                                      </h2>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        Required
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                      The account and the deal this quote is for.
                                    </p>
                                  </div>
                                </div>
                                <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-4 grid md:grid-cols-2">
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <div className="flex gap-1.5 items-center">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-customer">
                                        Customer
                                      </FieldLabel>
                                      <Tooltip>
                                      <TooltipTrigger className="-my-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Customer info" id="base-ui-_R_1m9hrmlubsnqn5ulb_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 16v-4"></path>
                                          <path d="M12 8h.01"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                    <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                      <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="form-3-customer" type="text" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Find or add customer..." aria-invalid="false" value="Brightwave Media" />
                                      <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] pr-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-end">
                                        <button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group-has-data-[slot=combobox-clear]/input-group:hidden group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-[calc(var(--radius)-3px)] select-none shadow-none shrink-0 size-6 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m6 9 6 6 6-6"></path>
                                          </svg>
                                        </button>
                                        <button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-[calc(var(--radius)-3px)] select-none shadow-none shrink-0 size-6 text-sm transition-all whitespace-nowrap" type="button" tabIndex="-1" data-size="icon-xs" data-visible="">
                                          <svg className="lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                    <input id="base-ui-_R_hhrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="Brightwave Media" />
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <div className="flex gap-1.5 items-center">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-tax-id">
                                        Tax ID
                                      </FieldLabel>
                                      <Tooltip>
                                      <TooltipTrigger className="-my-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Tax ID info" id="base-ui-_R_1mahrmlubsnqn5ulb_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 16v-4"></path>
                                          <path d="M12 8h.01"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                    <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                      <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 12h4"></path>
                                          <path d="M10 8h4"></path>
                                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                        </svg>
                                      </InputGroupAddon>
                                      <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="form-3-tax-id" value="US-88-2947135" />
                                    </InputGroup>
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <div className="flex gap-1.5 items-center">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-invoice-number">
                                        Quote Number
                                      </FieldLabel>
                                      <Tooltip>
                                      <TooltipTrigger className="-my-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Quote Number info" id="base-ui-_R_1mbhrmlubsnqn5ulb_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 16v-4"></path>
                                          <path d="M12 8h.01"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                    <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                      <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                        <svg className="lucide lucide-hash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <line x1="4" x2="20" y1="9" y2="9"></line>
                                          <line x1="4" x2="20" y1="15" y2="15"></line>
                                          <line x1="10" x2="8" y1="3" y2="21"></line>
                                          <line x1="16" x2="14" y1="3" y2="21"></line>
                                        </svg>
                                      </InputGroupAddon>
                                      <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="form-3-invoice-number" aria-invalid="false" value="Q-2041" />
                                    </InputGroup>
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-po-number">
                                      PO Reference
                                    </FieldLabel>
                                    <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="form-3-po-number" value="DEAL-4967"></Input>
                                  </Field>
                                </FieldGroup>
                              </section>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <section className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <div className="flex flex-wrap gap-2 items-center">
                                      <h2 className="font-semibold leading-6 text-base text-foreground">
                                        Terms
                                      </h2>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Net 14
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                      Dates, currency, and collection method.
                                    </p>
                                  </div>
                                </div>
                                <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-4 grid md:grid-cols-3">
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-issue-date">
                                      Issue Date
                                    </FieldLabel>
                                    <Popover>
                                    <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-between outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="form-3-issue-date" aria-label="Choose issue date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                                      <span className="truncate">
                                        Jul 17, 2026
                                      </span>
                                      <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end" aria-hidden="true">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                      </svg>
                                    </PopoverTrigger>
                                    </Popover>
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-due-date">
                                      Valid Until
                                    </FieldLabel>
                                    <Popover>
                                    <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-between outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="form-3-due-date" aria-label="Choose valid-until date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                                      <span className="truncate">
                                        Aug 14, 2026
                                      </span>
                                      <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end" aria-hidden="true">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                      </svg>
                                    </PopoverTrigger>
                                    </Popover>
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-currency">
                                      Currency
                                    </FieldLabel>
                                    <Select>
                                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="form-3-currency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue className="flex flex-1 text-left">
                                        USD
                                      </SelectValue>
                                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        ▼
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_R_jjrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="usd" />
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-payment-terms">
                                      Payment Terms
                                    </FieldLabel>
                                    <Select>
                                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="form-3-payment-terms" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue className="flex flex-1 text-left">
                                        Net 14
                                      </SelectValue>
                                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        ▼
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_R_kjrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="net-14" />
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-collection-method">
                                      Collection
                                    </FieldLabel>
                                    <Select>
                                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="form-3-collection-method" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue className="flex flex-1 text-left">
                                        Annual
                                      </SelectValue>
                                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        ▼
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_R_ljrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="annual" />
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-billing-address">
                                      Billing Address
                                    </FieldLabel>
                                    <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="form-3-billing-address" aria-invalid="false" value="14 Warren Street, Suite 620, New York, NY"></Input>
                                  </Field>
                                </FieldGroup>
                              </section>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <section className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <div className="flex flex-wrap gap-2 items-center">
                                      <h2 className="font-semibold leading-6 text-base text-foreground">
                                        Line Items
                                      </h2>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-secondary-foreground text-xs transition-shadow">
                                        3 items
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                      Products, services, quantity, tax, and amount.
                                    </p>
                                  </div>
                                  <div className="shrink-0">
                                    <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      Add item
                                    </Button>
                                  </div>
                                </div>
                                <div className="overflow-x-auto relative w-full">
                                  <Table className="caption-bottom min-w-[820px] text-sm w-full" aria-label="Quote line items">
                                    <TableHeader className="[&_tr]:border-b">
                                      <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                                        <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 ps-0 px-2 text-foreground text-left w-[42%] whitespace-nowrap">
                                          Item
                                        </TableHead>
                                        <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-foreground text-left w-24 whitespace-nowrap">
                                          Qty
                                        </TableHead>
                                        <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-foreground text-left w-36 whitespace-nowrap">
                                          Rate
                                        </TableHead>
                                        <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-foreground text-left w-32 whitespace-nowrap">
                                          Tax
                                        </TableHead>
                                        <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-end text-foreground w-32 whitespace-nowrap">
                                          Amount
                                        </TableHead>
                                        <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 pe-0 px-2 text-foreground text-left w-10 whitespace-nowrap"></TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody className="[&_tr:last-child]:border-0">
                                      <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-0 whitespace-nowrap">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Select>
                                            <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-0 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_4mlrmlubsnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-1">
                                              <SelectValue className="flex flex-1 text-left">
                                                Pro platform licence
                                              </SelectValue>
                                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6"></path>
                                                ▼
                                              </svg>
                                            </SelectTrigger>
                                            </Select>
                                            <input id="base-ui-_R_4mlrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="platform-pro" />
                                            <Tooltip>
                                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Pro platform licence details" id="base-ui-_R_6omlrmlubsnqn5ulb_" baseUiTooltipTrigger="">
                                              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 16v-4"></path>
                                                <path d="M12 8h.01"></path>
                                              </svg>
                                            </TooltipTrigger>
                                            </Tooltip>
                                          </div>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors w-20" id="base-ui-_R_16lrmlubsnqn5ulb_" type="number" min="1" step="1" aria-label="Quantity for Pro platform licence" value="60"></Input>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-28 rounded-lg transition-colors" role="group">
                                            <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                              $
                                            </InputGroupAddon>
                                            <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_9mlrmlubsnqn5ulb_" type="number" min="0" step="50" aria-label="Rate for Pro platform licence" value="1200" />
                                          </InputGroup>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <Select>
                                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-24 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_26lrmlubsnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Tax rate for Pro platform licence">
                                            <SelectValue className="flex flex-1 text-left">
                                              8.25%
                                            </SelectValue>
                                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                              ▼
                                            </svg>
                                          </SelectTrigger>
                                          </Select>
                                          <input id="base-ui-_R_26lrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="8.25" />
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle font-medium p-2 tabular-nums text-end whitespace-nowrap">
                                          <span className="inline-flex items-center justify-end min-h-9">
                                            $72,000.00
                                          </span>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 pe-0 text-end whitespace-nowrap">
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Remove Pro platform licence">
                                            <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M10 11v6"></path>
                                              <path d="M14 11v6"></path>
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                              <path d="M3 6h18"></path>
                                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-0 whitespace-nowrap">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Select>
                                            <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-0 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_4qlrmlubsnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-2">
                                              <SelectValue className="flex flex-1 text-left">
                                                Implementation retainer
                                              </SelectValue>
                                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6"></path>
                                                ▼
                                              </svg>
                                            </SelectTrigger>
                                            </Select>
                                            <input id="base-ui-_R_4qlrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="implementation-retainer" />
                                            <Tooltip>
                                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Implementation retainer details" id="base-ui-_R_6oqlrmlubsnqn5ulb_" baseUiTooltipTrigger="">
                                              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 16v-4"></path>
                                                <path d="M12 8h.01"></path>
                                              </svg>
                                            </TooltipTrigger>
                                            </Tooltip>
                                          </div>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors w-20" id="base-ui-_R_1alrmlubsnqn5ulb_" type="number" min="1" step="1" aria-label="Quantity for Implementation retainer" value="1"></Input>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-28 rounded-lg transition-colors" role="group">
                                            <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                              $
                                            </InputGroupAddon>
                                            <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_9qlrmlubsnqn5ulb_" type="number" min="0" step="50" aria-label="Rate for Implementation retainer" value="4800" />
                                          </InputGroup>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <Select>
                                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-24 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_2alrmlubsnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Tax rate for Implementation retainer">
                                            <SelectValue className="flex flex-1 text-left">
                                              8.25%
                                            </SelectValue>
                                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                              ▼
                                            </svg>
                                          </SelectTrigger>
                                          </Select>
                                          <input id="base-ui-_R_2alrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="8.25" />
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle font-medium p-2 tabular-nums text-end whitespace-nowrap">
                                          <span className="inline-flex items-center justify-end min-h-9">
                                            $4,800.00
                                          </span>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 pe-0 text-end whitespace-nowrap">
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Remove Implementation retainer">
                                            <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M10 11v6"></path>
                                              <path d="M14 11v6"></path>
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                              <path d="M3 6h18"></path>
                                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-0 whitespace-nowrap">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Select>
                                            <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-0 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_4ulrmlubsnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-3">
                                              <SelectValue className="flex flex-1 text-left">
                                                Priority support block
                                              </SelectValue>
                                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6"></path>
                                                ▼
                                              </svg>
                                            </SelectTrigger>
                                            </Select>
                                            <input id="base-ui-_R_4ulrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="priority-support" />
                                            <Tooltip>
                                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Priority support block details" id="base-ui-_R_6oulrmlubsnqn5ulb_" baseUiTooltipTrigger="">
                                              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 16v-4"></path>
                                                <path d="M12 8h.01"></path>
                                              </svg>
                                            </TooltipTrigger>
                                            </Tooltip>
                                          </div>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors w-20" id="base-ui-_R_1elrmlubsnqn5ulb_" type="number" min="1" step="1" aria-label="Quantity for Priority support block" value="2"></Input>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-28 rounded-lg transition-colors" role="group">
                                            <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                              $
                                            </InputGroupAddon>
                                            <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_9ulrmlubsnqn5ulb_" type="number" min="0" step="50" aria-label="Rate for Priority support block" value="950" />
                                          </InputGroup>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                          <Select>
                                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-24 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_2elrmlubsnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Tax rate for Priority support block">
                                            <SelectValue className="flex flex-1 text-left">
                                              No tax
                                            </SelectValue>
                                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                              ▼
                                            </svg>
                                          </SelectTrigger>
                                          </Select>
                                          <input id="base-ui-_R_2elrmlubsnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="0" />
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle font-medium p-2 tabular-nums text-end whitespace-nowrap">
                                          <span className="inline-flex items-center justify-end min-h-9">
                                            $1,900.00
                                          </span>
                                        </TableCell>
                                        <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 pe-0 text-end whitespace-nowrap">
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Remove Priority support block">
                                            <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M10 11v6"></path>
                                              <path d="M14 11v6"></path>
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                              <path d="M3 6h18"></path>
                                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </div>
                              </section>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <section className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <div className="flex flex-wrap gap-2 items-center">
                                      <h2 className="font-semibold leading-6 text-base text-foreground">
                                        Notes
                                      </h2>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-secondary-foreground text-xs transition-shadow">
                                        Optional
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                      Customer-facing memo and payment footer.
                                    </p>
                                  </div>
                                </div>
                                <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-4 grid md:grid-cols-2">
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-memo">
                                      Memo
                                    </FieldLabel>
                                    <Textarea className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm px-2.5 py-2 rounded-lg text-base transition-colors" id="form-3-memo">
                                      Pricing holds until the valid-until date. Seat tiers are as discussed on the demo.
                                    </Textarea>
                                  </Field>
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="form-3-footer-note">
                                      Footer Note
                                    </FieldLabel>
                                    <Textarea className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm px-2.5 py-2 rounded-lg text-base transition-colors" id="form-3-footer-note">
                                      Accepting this quote starts the order form and onboarding.
                                    </Textarea>
                                  </Field>
                                </FieldGroup>
                              </section>
                            </FieldGroup>
                          </FieldSet>
                        </CardContent>
                        <CardFooter className="bg-muted/50 border-t flex-col gap-4 items-stretch p-(--card-spacing) px-5 py-5 rounded-b-xl sm:px-6">
                          <div className="gap-5 grid lg:grid-cols-[1fr_21rem] lg:items-start">
                            <div className="flex flex-col gap-3 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                  Ready to send
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  PDF preview ready
                                </Badge>
                              </div>
                              <div className="flex flex-col gap-1 min-w-0 text-muted-foreground text-sm">
                                <p>
                                  The PDF and the signature link are prepared after sending.
                                </p>
                                <p>
                                  Totals update as items, taxes, and discounts change.
                                </p>
                              </div>
                            </div>
                            <div className="bg-background border isolate overflow-hidden p-4 relative rounded-md shadow-xs">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                                <div className="absolute bg-[radial-gradient(ellipse_at_84%_12%,color-mix(in_oklch,var(--color-warning)_26%,transparent),transparent_34%),radial-gradient(circle_at_8%_96%,color-mix(in_oklch,var(--color-primary)_12%,transparent),transparent_30%),linear-gradient(135deg,color-mix(in_oklch,var(--color-warning)_7%,transparent),transparent_58%)] inset-0"></div>
                                <div className="[mask-image:linear-gradient(135deg,transparent_0%,black_22%,black_76%,transparent_100%)] absolute bg-[length:20px_20px] bg-[radial-gradient(circle,color-mix(in_oklch,var(--color-muted-foreground)_12%,transparent)_1px,transparent_1.6px)] inset-0 opacity-35"></div>
                                <svg className="absolute h-full inset-0 text-warning w-full" viewBox="0 0 360 220" preserveAspectRatio="none">
                                  <path d="M236 8H331L360 37V126H236C225 126 216 117 216 106V28C216 17 225 8 236 8Z" fill="currentColor" opacity="0.12"></path>
                                  <path d="M331 8V37H360" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.24"></path>
                                  <circle cx="326" cy="41" r="6.5" fill="var(--color-background)" opacity="0.88"></circle>
                                  <g opacity="0.24">
                                    <circle cx="269" cy="56" r="15" fill="none" stroke="currentColor" strokeWidth="6.5"></circle>
                                    <circle cx="315" cy="100" r="16" fill="none" stroke="currentColor" strokeWidth="6.5"></circle>
                                    <path d="M251 116L333 37" fill="none" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round"></path>
                                  </g>
                                  <path d="M147 41L156 59L175 68L156 77L147 96L138 77L119 68L138 59Z" fill="currentColor" opacity="0.12"></path>
                                  <path d="M201 145L207 157L219 163L207 169L201 181L195 169L183 163L195 157Z" fill="currentColor" opacity="0.1"></path>
                                  <circle cx="333" cy="162" r="42" fill="currentColor" opacity="0.07"></circle>
                                  <circle cx="333" cy="162" r="18" fill="currentColor" opacity="0.09"></circle>
                                  <path d="M-14 204C39 175 91 164 152 171C213 178 259 164 371 116V220H-14Z" fill="currentColor" opacity="0.07"></path>
                                </svg>
                                <div className="-right-2 absolute bg-background/90 border rounded-full shadow-xs size-4 top-1/2"></div>
                                <div className="-bottom-2 absolute bg-background/90 border right-16 rounded-full shadow-xs size-4"></div>
                              </div>
                              <div className="flex flex-col gap-4 relative">
                                <div className="gap-3 grid sm:grid-cols-[1fr_8rem] sm:items-center">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-sm">
                                      Quote Discount
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      Applied before tax calculation.
                                    </span>
                                  </div>
                                  <InputGroup className="bg-background/85 border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                    <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_36kmlubsnqn5ulb_" type="number" min="0" max="100" step="0.5" aria-label="Quote discount percentage" value="8" />
                                    <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] pr-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-end">
                                      %
                                    </InputGroupAddon>
                                  </InputGroup>
                                </div>
                                <dl className="backdrop-blur-sm bg-background/70 border gap-2.5 grid p-3 rounded-md text-sm">
                                  <div className="flex gap-4 items-center justify-between">
                                    <dt>
                                      Subtotal
                                    </dt>
                                    <dd className="tabular-nums text-foreground">
                                      $78,700.00
                                    </dd>
                                  </div>
                                  <div className="flex gap-4 items-center justify-between">
                                    <dt>
                                      Discount
                                    </dt>
                                    <dd className="tabular-nums text-foreground">
                                      -$6,296.00
                                    </dd>
                                  </div>
                                  <div className="flex gap-4 items-center justify-between">
                                    <dt>
                                      Tax
                                    </dt>
                                    <dd className="tabular-nums text-foreground">
                                      $5,829.12
                                    </dd>
                                  </div>
                                  <div className="flex gap-4 items-center justify-between">
                                    <dt className="font-medium text-foreground">
                                      Quote Total
                                    </dt>
                                    <dd className="font-semibold tabular-nums text-base text-foreground">
                                      $78,233.12
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </form>
                  </main>
                </div>
              </section>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
