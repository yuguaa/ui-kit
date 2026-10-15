import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableRowExpand,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div id="root">
      <SidebarProvider>
      <div className="**:data-[slot=sidebar-menu-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-button]:hover:text-foreground **:data-[slot=sidebar-menu-button]:text-accent-foreground/80 **:data-[slot=sidebar-menu-sub-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-sub-button]:hover:text-foreground **:data-[slot=sidebar-menu-sub-button]:text-accent-foreground/80 [&_[data-collapsible=icon]_[data-slot=sidebar-menu-button][data-active]>svg]:-ml-px [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:border [&_[data-slot=sidebar-menu-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:shadow-black/5! [&_[data-slot=sidebar-menu-button][data-active]]:shadow-xs! [&_[data-slot=sidebar-menu-button][data-active]]:text-foreground [&_[data-slot=sidebar-menu-sub-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:border [&_[data-slot=sidebar-menu-sub-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-sub-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:shadow-black/5! [&_[data-slot=sidebar-menu-sub-button][data-active]]:shadow-xs! [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-foreground [--sidebar-border:transparent] [--sidebar-width:260px] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
        <SidebarProvider>
        <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
          <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
          <SidebarProvider>
          <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
            <SidebarProvider>
            <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
              <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between p-2" sidebar="header">
                <a className="duration-200 ease-linear focus-visible:ring-2 focus-visible:ring-sidebar-ring gap-2 inline-flex items-center min-h-10 outline-none px-0.5 rounded-md transition-all" aria-label="Roster, go to the dashboard" href="/" data-discover="true">
                  <span className="flex items-center justify-center relative shrink-0 size-7">
                    <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-[0.875] size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                        <svg className="size-5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </span>
                  <span className="font-medium in-data-[state=collapsed]:hidden text-sm truncate">
                    {"Roster"}
                  </span>
                </a>
                <div className="gap-0.5 in-data-[state=collapsed]:flex-col inline-flex items-center">
                  <Popover>
                  <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V12.2558C19 13.0514 19.3161 13.8145 19.8787 14.3771L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                  </PopoverTrigger>
                  </Popover>
                  <SidebarProvider>
                  <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:duration-200 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-[state=collapsed]:[&_svg]:rotate-180 inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor">
                      <path d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z" stroke="currentColor" strokeWidth="2"></path>
                      <path d="M9.5 3L9.5 21" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M5 7H6M5 10H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="sr-only">
                      {"Toggle Sidebar"}
                    </span>
                  </SidebarTrigger>
                  </SidebarProvider>
                </div>
              </SidebarHeader>
              <SidebarProvider>
              <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
                <div className="pt-2 py-2">
                  <form>
                    <SidebarProvider>
                    <SidebarGroup className="p-2 py-0" sidebar="group">
                      <SidebarProvider>
                      <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-background hover:text-foreground in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent! in-data-[state=collapsed]:w-8! justify-start overflow-hidden pl-7 px-2.5 rounded-lg text-sm transition-[width] w-full" type="button" tabIndex="0" id="search">
                          {"Search..."}
                        </Button>
                        <svg className="-translate-y-1/2 absolute left-2 opacity-50 pointer-events-none select-none size-4 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:hidden min-w-5 px-1 right-2 rounded-sm text-muted-foreground text-xs top-1/2 w-fit">
                          {"⌘K"}
                        </Kbd>
                      </SidebarGroupContent>
                      </SidebarProvider>
                    </SidebarGroup>
                    </SidebarProvider>
                    <DialogHeader className="gap-2 sr-only">
                      <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_r_4_">
                        {"Search"}
                      </DialogTitle>
                      <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_r_5_">
                        {"Search your workspace content."}
                      </DialogDescription>
                    </DialogHeader>
                  </form>
                </div>
                <SidebarProvider>
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                    {"Workspace"}
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent className="text-sm" sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/" discover="true">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M10.5 8.75V6.75C10.5 5.10626 10.5 4.28439 10.046 3.73121C9.96291 3.62995 9.87005 3.53709 9.76879 3.45398C9.21561 3 8.39374 3 6.75 3C5.10626 3 4.28439 3 3.73121 3.45398C3.62995 3.53709 3.53709 3.62995 3.45398 3.73121C3 4.28439 3 5.10626 3 6.75V8.75C3 10.3937 3 11.2156 3.45398 11.7688C3.53709 11.8701 3.62995 11.9629 3.73121 12.046C4.28439 12.5 5.10626 12.5 6.75 12.5C8.39374 12.5 9.21561 12.5 9.76879 12.046C9.87005 11.9629 9.96291 11.8701 10.046 11.7688C10.5 11.2156 10.5 10.3937 10.5 8.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M7.75 15.5H5.75C5.05222 15.5 4.70333 15.5 4.41943 15.5861C3.78023 15.78 3.28002 16.2802 3.08612 16.9194C3 17.2033 3 17.5522 3 18.25C3 18.9478 3 19.2967 3.08612 19.5806C3.28002 20.2198 3.78023 20.72 4.41943 20.9139C4.70333 21 5.05222 21 5.75 21H7.75C8.44778 21 8.79667 21 9.08057 20.9139C9.71977 20.72 10.22 20.2198 10.4139 19.5806C10.5 19.2967 10.5 18.9478 10.5 18.25C10.5 17.5522 10.5 17.2033 10.4139 16.9194C10.22 16.2802 9.71977 15.78 9.08057 15.5861C8.79667 15.5 8.44778 15.5 7.75 15.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M21 17.25V15.25C21 13.6063 21 12.7844 20.546 12.2312C20.4629 12.1299 20.3701 12.0371 20.2688 11.954C19.7156 11.5 18.8937 11.5 17.25 11.5C15.6063 11.5 14.7844 11.5 14.2312 11.954C14.1299 12.0371 14.0371 12.1299 13.954 12.2312C13.5 12.7844 13.5 13.6063 13.5 15.25V17.25C13.5 18.8937 13.5 19.7156 13.954 20.2688C14.0371 20.3701 14.1299 20.4629 14.2312 20.546C14.7844 21 15.6063 21 17.25 21C18.8937 21 19.7156 21 20.2688 20.546C20.3701 20.4629 20.4629 20.3701 20.546 20.2688C21 19.7156 21 18.8937 21 17.25Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M18.25 3H16.25C15.5522 3 15.2033 3 14.9194 3.08612C14.2802 3.28002 13.78 3.78023 13.5861 4.41943C13.5 4.70333 13.5 5.05222 13.5 5.75C13.5 6.44778 13.5 6.79667 13.5861 7.08057C13.78 7.71977 14.2802 8.21998 14.9194 8.41388C15.2033 8.5 15.5522 8.5 16.25 8.5H18.25C18.9478 8.5 19.2967 8.5 19.5806 8.41388C20.2198 8.21998 20.72 7.71977 20.9139 7.08057C21 6.79667 21 6.44778 21 5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/approvals" discover="true">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span>
                            {"Approvals"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="subnav-people">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span className="truncate">
                            {"People"}
                          </span>
                          <svg className="duration-200 ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <SidebarMenuSub className="border-l border-sidebar-border gap-1 group-data-[collapsible=icon]:hidden mx-3.5 px-2.5 py-0.5 translate-x-px" sidebar="menu-sub" id="subnav-people">
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" data-active="" href="/people/directory" discover="true">
                              <span>
                                {"Directory"}
                              </span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/people/import" discover="true">
                              <span>
                                {"Import"}
                              </span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/hiring/pipeline" discover="true">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M17.5 21L17.5 14M14 17.5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span>
                            {"Hiring"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-time">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M16 2V6M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M3 10H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span className="truncate">
                            {"Time"}
                          </span>
                          <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-settings">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                          </svg>
                          <span className="truncate">
                            {"Settings"}
                          </span>
                          <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
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
                <SidebarProvider>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full whitespace-nowrap" aria-expanded="true" aria-controls="active-projects-list" sidebar="group-label">
                    {"Headcount by department"}
                    <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent className="text-sm" sidebar="group-content" id="active-projects-list">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Engineering" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-blue-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="0" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"Engineering"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Engineering" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_q_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=People" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-violet-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="15.079644737231007" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"People"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for People" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Sales" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-emerald-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="15.079644737231007" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"Sales"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Sales" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_18_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Customer%20Success" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-orange-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="22.61946710584651" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"Customer Success"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Customer Success" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_1f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Design" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-rose-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="22.61946710584651" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"Design"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Design" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
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
                  <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden p-2" sidebar="group">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] border-border md:w-[225px] shrink-0" spacing="xs">
                      <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                        <div className="font-semibold text-warning text-xs">
                          {"Headcount plan"}
                        </div>
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] space-y-2">
                        <p className="leading-snug text-muted-foreground text-xs">
                          {"Approved headcount for FY26. Resets when the plan is re-baselined."}
                        </p>
                        <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                          <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                          <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar">
                            <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                              <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                            </ProgressTrack>
                            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                              {"x"}
                            </span>
                          </Progress>
                        </div>
                        <div className="flex items-center justify-between leading-none text-xs">
                          <div className="flex gap-1 items-center">
                            <span className="font-semibold text-foreground">
                              {"92%"}
                            </span>
                            <span className="text-muted-foreground">
                              {"Filled"}
                            </span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="font-semibold text-foreground">
                              {"8%"}
                            </span>
                            <span className="text-muted-foreground">
                              {"Open"}
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
              <SidebarFooter className="gap-2 p-2" sidebar="footer">
                <SidebarProvider>
                <SidebarMenu className="gap-0" sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:ml-0! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button pr-0! ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open account menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                        <AvatarImage className="rounded-full" alt="" src="/avatars/15.jpg"></AvatarImage>
                      </Avatar>
                      <div className="flex flex-col in-data-[state=collapsed]:hidden leading-tight min-w-0">
                        <span className="font-medium text-xs truncate">
                          {"Bruno Duarte"}
                        </span>
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="bg-emerald-500 font-semibold inline-flex items-center justify-center ring-1 ring-foreground/10 rounded-full shrink-0 size-2 text-white! tracking-tight" aria-hidden="true"></span>
                          <span className="text-[10px] text-muted-foreground truncate">
                            {"Roster UK"}
                          </span>
                        </span>
                      </div>
                      <svg className="in-data-[state=collapsed]:hidden ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                        <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                        <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarFooter>
            </div>
            </SidebarProvider>
          </div>
          </SidebarProvider>
        </Sidebar>
        </SidebarProvider>
        <SidebarInset className="bg-background border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm ml-0! overflow-y-auto">
          <header className="ease-linear flex gap-2 group-has-data-[collapsible=icon]/sidebar-wrapper:h-14 h-14 items-center shrink-0 transition-[width,height]">
            <div className="flex gap-2 items-center max-w-[96rem] mx-auto px-4 w-full">
              <SidebarProvider>
              <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor">
                  <path d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M9.5 3L9.5 21" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M5 7H6M5 10H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
              <Breadcrumb aria-label="breadcrumb">
                <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                  <BreadcrumbItem className="gap-1 hidden md:flex">
                    <BreadcrumbLink className="flex gap-1.5 hover:text-foreground items-center transition-colors" href="/people/directory" discover="true">
                      <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        <path d="M15 21.5V16.5C15 15.0858 15 14.3787 14.5607 13.9393C14.1213 13.5 13.4142 13.5 12 13.5C10.5858 13.5 9.87868 13.5 9.43934 13.9393C9 14.3787 9 15.0858 9 16.5V21.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      {"People"}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden items-center md:flex" role="presentation" aria-hidden="true">
                    <span className="bg-foreground/30 h-0.5 inline-flex rounded-full shrink-0 w-2"></span>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1">
                    <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                      {"Directory"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 max-w-[96rem] mx-auto pb-4 px-4 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 items-end justify-between">
                <div className="flex flex-col gap-1 min-w-0">
                  <h1 className="font-medium text-foreground text-xl tracking-tight">
                    {"People"}
                  </h1>
                </div>
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" data-icon="inline-start" aria-hidden="true">
                    <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M17.5 21L17.5 14M14 17.5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  {"Add person"}
                </Button>
              </div>
              <section className="flex flex-col min-w-0 w-full">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                  <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col min-w-0">
                      <div className="font-semibold text-sm">
                        {"Reporting Lines"}
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                        <span className="truncate">
                          {"Roster UK"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          {"30 Jul 2026"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center min-w-0">
                      <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                        <span className="font-medium text-muted-foreground text-xs truncate">
                          {"Headcount"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                          {"21"}
                        </Badge>
                      </div>
                      <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                        <span className="font-medium text-muted-foreground text-xs truncate">
                          {"Layers"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                          {"4"}
                        </Badge>
                      </div>
                      <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                        <span className="font-medium text-muted-foreground text-xs truncate">
                          {"Avg Span"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                          {"2.0"}
                        </Badge>
                      </div>
                      <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                        <span className="font-medium text-muted-foreground text-xs truncate">
                          {"Open Roles"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                          {"5"}
                        </Badge>
                      </div>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" data-icon="inline-start" aria-hidden="true">
                          <path d="M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          <path d="M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        {"Export"}
                      </Button>
                    </div>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] bg-card p-0! shadow-none!">
                    <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-3 py-3">
                      <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 lg:max-w-xs rounded-lg transition-colors" role="group">
                        <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                          <svg className="size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </InputGroupAddon>
                        <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_ni_" placeholder="Search people..." aria-label="Search people" value="" />
                      </InputGroup>
                      <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                        <div className="flex gap-2 items-center">
                          <span className="font-medium text-muted-foreground text-xs">
                            {"Depth"}
                          </span>
                          <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg shrink-0" data-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Tree depth" style={{"--gap": "0"}}>
                            <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2.5 rounded-lg text-sm transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Collapse to the chief executive">
                              {"Collapse"}
                            </ToggleGroupItem>
                            <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2.5 rounded-lg text-sm transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="Expand to level 1">
                              {"1"}
                            </ToggleGroupItem>
                            <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2.5 rounded-lg text-sm transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand to level 2">
                              {"2"}
                            </ToggleGroupItem>
                            <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2.5 rounded-lg text-sm transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand all levels">
                              {"All"}
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </div>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_nq_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" data-icon="inline-start" aria-hidden="true">
                            <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          {"Filter"}
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                        <Popover>
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_nt_" aria-haspopup="dialog" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" data-icon="inline-start" aria-hidden="true">
                            <path d="M3.99963 5.00055L9.99963 5.00031" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M12.9996 5.00031L19.9996 5.00031" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M15.9996 9.00031L15.9996 15.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M9.99963 2.00031L9.99963 8.00031" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M11.9996 16.0003L11.9996 22.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M15.9996 12.0001L19.9996 12.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M3.99963 12.0005L12.9996 12.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M11.9996 19.0003L19.9996 19.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M3.99963 19.0005L8.99963 19.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                          </svg>
                          {"Display"}
                        </PopoverTrigger>
                        </Popover>
                      </div>
                    </div>
                    <DataGrid>
                      <div className="relative">
                        <DataGridProvider>
                        <DataGridScrollArea role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_nu_-viewport" tabIndex="0" data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "164px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                              <DataGridProvider>
                              <DataGridTableViewport style={{width: "calc(1144px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                                <DataGridProvider>
                                <DataGridTable style={{"--header-select-size": "36", "--col-select-size": "36", "--header-person-size": "300", "--col-person-size": "300", "--header-department-size": "132", "--col-department-size": "132", "--header-location-size": "128", "--col-location-size": "128", "--header-span-size": "124", "--col-span-size": "124", "--header-openRoles-size": "116", "--col-openRoles-size": "116", "--header-tenure-size": "124", "--col-tenure-size": "124", "--header-status-size": "128", "--col-status-size": "128", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1144px + var(--data-grid-fill-size, 0px))"}}>
                                  <colgroup>
                                    <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-person-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-department-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-location-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-span-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-openRoles-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-tenure-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                                    <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                    <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-10 last:pe-(--frame-panel-header-px) pe-0 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-pinned="start" data-outer-pinned-col="start" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_nv_" aria-checked="false" aria-label="Select all"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-hidden px-3 relative rtl:text-right text-foreground text-left" scope="col" data-pinned="start" data-last-col="start" style={{width: "calc(var(--header-person-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o5_" aria-expanded="false">
                                            {"Person"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="absolute before:absolute before:bg-border before:end-0 before:inset-y-0 before:w-px cursor-col-resize end-0 flex h-full justify-end top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-department-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_oa_" aria-expanded="false">
                                            {"Department"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-location-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_of_" aria-expanded="false">
                                            {"Location"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "calc(var(--header-span-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 rounded-lg select-none shrink-0 text-right text-secondary-foreground/80 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_ok_" aria-expanded="false">
                                            {"Reports"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "calc(var(--header-openRoles-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 rounded-lg select-none shrink-0 text-right text-secondary-foreground/80 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_op_" aria-expanded="false">
                                            {"Open Roles"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-tenure-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_ou_" aria-expanded="false">
                                            {"Tenure"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_p3_" aria-expanded="false">
                                            {"Status"}
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-10 last:pe-(--frame-panel-header-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                                      <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                    </tr>
                                  </thead>
                                  <DataGridProvider>
                                  <DataGridTableBody>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-021">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_p5_" aria-checked="false" aria-label="Select Isabel Ferreira"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/22.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Isabel Ferreira"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                                {"Executive"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"Founder & CEO"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"People"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"London"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"7"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 20"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                            {"5"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"7 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"15 Jan 2019"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Isabel Ferreira, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Isabel Ferreira" aria-haspopup="menu" id="base-ui-_r_pb_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-001" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_pd_" aria-checked="false" aria-label="Select Amara Okafor"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/01.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Amara Okafor"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"VP Engineering"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"Engineering"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"London"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"2"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 4"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                            {"1"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"5 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"15 Mar 2021"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Amara Okafor, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Amara Okafor" aria-haspopup="menu" id="base-ui-_r_pj_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-005" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_pl_" aria-checked="false" aria-label="Select Hannah Weber"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/05.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Hannah Weber"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"Head of Product"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"Product"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Berlin"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"2"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 3"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                            {"1"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"4 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"2 Aug 2021"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Hannah Weber, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Hannah Weber" aria-haspopup="menu" id="base-ui-_r_pr_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-009" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_pt_" aria-checked="false" aria-label="Select Elena Petrova"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/09.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Elena Petrova"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"Sales Director"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"Sales"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Amsterdam"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"2"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 2"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                            {"1"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"5 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"16 Nov 2020"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Elena Petrova, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Elena Petrova" aria-haspopup="menu" id="base-ui-_r_q3_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-012" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_q5_" aria-checked="false" aria-label="Select Aisha Rahman"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/12.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Aisha Rahman"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"Marketing Manager"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"Marketing"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dubai"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"1"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 1"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <span className="text-muted-foreground text-sm">
                                            {"--"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"3 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"6 Feb 2023"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Aisha Rahman, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Aisha Rahman" aria-haspopup="menu" id="base-ui-_r_qb_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-014" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_qd_" aria-checked="false" aria-label="Select Grace Adeyemi"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/14.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Grace Adeyemi"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"CS Lead"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"Customer Success"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Lagos"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"1"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 1"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                            {"1"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"4 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"20 Jun 2022"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Grace Adeyemi, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Grace Adeyemi" aria-haspopup="menu" id="base-ui-_r_qj_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-016" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_ql_" aria-checked="false" aria-label="Select Bruno Duarte"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/15.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Bruno Duarte"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"People Partner"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"People"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Lisbon"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"1"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 1"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <span className="text-muted-foreground text-sm">
                                            {"--"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"4 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"27 Sept 2021"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Bruno Duarte, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Bruno Duarte" aria-haspopup="menu" id="base-ui-_r_qr_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                    <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-018" data-depth="1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                        <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                        <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_qt_" aria-checked="false" aria-label="Select Ingrid Larsen"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="flex items-center shrink-0">
                                            <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                              <button className="hover:text-foreground inline-flex items-center justify-center rounded-lg size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                              </button>
                                            </DataGridTableRowExpand>
                                          </span>
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/17.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="flex flex-col min-w-0">
                                            <span className="flex gap-2 items-center min-w-0">
                                              <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                                {"Ingrid Larsen"}
                                              </span>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                                {"Vice President"}
                                              </Badge>
                                            </span>
                                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                                              {"Finance Manager"}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                        <span className="text-foreground text-sm truncate">
                                          {"Finance"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Oslo"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                        <div className="flex gap-1.5 items-center justify-end w-full">
                                          <span className="font-semibold tabular-nums text-foreground text-sm">
                                            {"1"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"of 1"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                        <div className="flex items-center justify-end w-full">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                            {"1"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                        <div className="flex flex-col min-w-0">
                                          <span className="text-foreground text-sm">
                                            {"3 years"}
                                          </span>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"14 Nov 2022"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                        <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Change status for Ingrid Larsen, currently Active">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                            <span className="bg-success rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                            {"Active"}
                                          </Badge>
                                        </button>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                        <div className="flex justify-end">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ingrid Larsen" aria-haspopup="menu" id="base-ui-_r_r3_" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                      <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    </tr>
                                  </DataGridTableBody>
                                  </DataGridProvider>
                                  <DataGridProvider>
                                  <DataGridTableFoot>
                                    <DataGridTableFootRow className="dark:bg-background">
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium lg:ps-4 ps-3 px-3 py-2 text-secondary-foreground/80"></td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-semibold text-foreground text-sm truncate">
                                            {"Roster UK"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                                            {"21 people"}
                                          </Badge>
                                        </div>
                                      </td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"5"}
                                        </span>
                                      </td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80">
                                        <span className="text-muted-foreground text-xs">
                                          {"3 need attention"}
                                        </span>
                                      </td>
                                      <td className="align-middle bg-muted/40 dark:bg-background font-medium lg:pe-4 pe-3 px-3 py-2 text-secondary-foreground/80"></td>
                                      <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
                                    </DataGridTableFootRow>
                                  </DataGridTableFoot>
                                  </DataGridProvider>
                                </DataGridTable>
                                </DataGridProvider>
                              </DataGridTableViewport>
                              </DataGridProvider>
                            </div>
                          </div>
                          <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_nu_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "837.7972027972028px"}}>
                            <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                          </div>
                        </DataGridScrollArea>
                        </DataGridProvider>
                      </div>
                    </DataGrid>
                  </FramePanel>
                </Frame>
              </section>
            </div>
          </div>
        </SidebarInset>
      </div>
      </SidebarProvider>
      <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    </div>
  )
}
