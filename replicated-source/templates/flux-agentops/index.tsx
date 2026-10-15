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
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
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
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
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
import { Spinner } from "@/registry/bases/base/ui/spinner"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <SidebarProvider>
    <div className="**:data-[sidebar=menu-button]:hover:text-foreground **:data-[sidebar=menu-button]:text-accent-foreground/80 **:data-[sidebar=menu-sub-button]:hover:text-foreground **:data-[sidebar=menu-sub-button]:text-accent-foreground/80 [&_[data-sidebar=menu-button]:hover>svg]:opacity-100 [&_[data-sidebar=menu-button]:hover]:bg-sidebar-accent/80! [&_[data-sidebar=menu-button]:hover]:border-border/60! [&_[data-sidebar=menu-button]:hover]:text-foreground! [&_[data-sidebar=menu-button]>svg]:opacity-60 [&_[data-sidebar=menu-button][data-active]>svg]:opacity-100 [&_[data-sidebar=menu-button][data-active]>svg]:text-primary [&_[data-sidebar=menu-button][data-active]]:bg-sidebar-accent! [&_[data-sidebar=menu-button][data-active]]:border [&_[data-sidebar=menu-button][data-active]]:border-border/60! [&_[data-sidebar=menu-button][data-active]]:hover:bg-sidebar-accent! [&_[data-sidebar=menu-button][data-active]]:text-foreground [&_[data-sidebar=menu-button]]:border! [&_[data-sidebar=menu-button]]:border-transparent! [&_[data-sidebar=menu-sub-button]:hover>svg]:opacity-100 [&_[data-sidebar=menu-sub-button]:hover]:bg-sidebar-accent/80! [&_[data-sidebar=menu-sub-button]:hover]:border-border/60! [&_[data-sidebar=menu-sub-button]:hover]:text-foreground! [&_[data-sidebar=menu-sub-button]>svg]:opacity-60 [&_[data-sidebar=menu-sub-button][data-active]>svg]:opacity-100 [&_[data-sidebar=menu-sub-button][data-active]>svg]:text-primary [&_[data-sidebar=menu-sub-button][data-active]]:bg-sidebar-accent! [&_[data-sidebar=menu-sub-button][data-active]]:border [&_[data-sidebar=menu-sub-button][data-active]]:border-border/60! [&_[data-sidebar=menu-sub-button][data-active]]:hover:bg-sidebar-accent! [&_[data-sidebar=menu-sub-button][data-active]]:text-foreground [&_[data-sidebar=menu-sub-button]]:border! [&_[data-sidebar=menu-sub-button]]:border-transparent! [--sidebar-border:transparent] [--sidebar-width:260px] [--sidebar:transparent] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <a className="-translate-y-[300%] bg-background border fixed focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50 focus:translate-y-0 font-medium left-3 px-3 py-2 rounded-lg shadow-sm text-sm top-3 transition-transform z-50" href="#main-content">
        {"Skip to content"}
      </a>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-2xl group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex group/rail h-12 items-center motion-reduce:transition-none outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
              <span className="flex flex-col items-center">
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
              </span>
              <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                {"Collapse"}
              </span>
            </button>
            <SidebarHeader className="[--radius:var(--radius-xl)] flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between p-2" sidebar="header">
              <div className="duration-200 ease-linear gap-2 inline-flex items-center min-h-10 px-0.5 transition-all">
                <span className="flex items-center justify-center relative shrink-0 size-7">
                  <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-3.5 left-1/2 origin-center p-0 rounded-2xl scale-[0.875] size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                      <svg className="size-4" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </span>
                <span className="font-medium in-data-[state=collapsed]:hidden text-sm">
                  {"AgentOps"}
                </span>
              </div>
              <div className="gap-0.5 in-data-[state=collapsed]:flex-col inline-flex items-center">
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_R_1maj5udb_" aria-haspopup="dialog" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                    <path d="M16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                    <path d="M4.43654 18H19.5625C20.2903 18 20.6542 18 20.8648 17.8951C21.274 17.6913 21.4929 17.2359 21.3964 16.789C21.3468 16.559 21.1194 16.2749 20.6648 15.7066L20.4951 15.4944C20.0392 14.9246 19.8113 14.6397 19.6184 14.3409C19.0187 13.4119 18.6477 12.354 18.5356 11.254C18.4995 10.9002 18.4995 10.5353 18.4995 9.8056V8.5C18.4995 8.03572 18.4995 7.80358 18.4867 7.60758C18.2898 4.60304 15.8965 2.20977 12.892 2.01285C12.696 2 12.4638 2 11.9995 2C11.5353 2 11.3031 2 11.1071 2.01285C8.10258 2.20977 5.70931 4.60304 5.51239 7.60758C5.49954 7.80358 5.49954 8.03572 5.49954 8.5V9.8056C5.49954 10.5353 5.49954 10.9002 5.46349 11.254C5.35143 12.354 4.98035 13.4119 4.38067 14.3409C4.18779 14.6397 3.95985 14.9246 3.50401 15.4944L3.33427 15.7066C2.87964 16.2749 2.65233 16.559 2.60268 16.789C2.50621 17.2359 2.72509 17.6913 3.13431 17.8951C3.3449 18 3.70878 18 4.43654 18Z" stroke="currentColor" strokeWidth={1.5}></path>
                  </svg>
                  <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                </PopoverTrigger>
                </Popover>
              </div>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="[--radius:var(--radius-xl)] gap-2 no-scrollbar" sidebar="content">
              <div className="pt-2 py-2">
                <form>
                  <SidebarProvider>
                  <SidebarGroup className="p-2 py-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="in-data-[state=collapsed]:flex in-data-[state=collapsed]:justify-center relative text-sm" sidebar="group-content">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border/60 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 duration-200 ease-linear focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:bg-sidebar-accent/80! hover:text-foreground in-data-[state=collapsed]:gap-0 in-data-[state=collapsed]:justify-center in-data-[state=collapsed]:mx-auto in-data-[state=collapsed]:px-0! in-data-[state=collapsed]:w-8! justify-start overflow-hidden pl-2 px-3 rounded-4xl shadow-none text-sm transition-[width,padding] w-full" type="button" tabIndex={0} id="search">
                        <svg className="opacity-50 pointer-events-none select-none shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span className="in-data-[state=collapsed]:hidden">
                          {"Search..."}
                        </span>
                      </Button>
                      <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5.5 in-data-[slot=input-group]:bg-input in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:hidden min-w-5.5 px-1.5 right-2 rounded-lg text-muted-foreground text-xs top-1/2 w-fit">
                        {"/"}
                      </Kbd>
                    </SidebarGroupContent>
                    </SidebarProvider>
                  </SidebarGroup>
                  </SidebarProvider>
                  <DialogHeader className="gap-1.5 sr-only">
                    <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_2r9ej5udb_">
                      {"Search"}
                    </DialogTitle>
                    <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_4r9ej5udb_">
                      {"Search your workspace content."}
                    </DialogDescription>
                  </DialogHeader>
                </form>
              </div>
              <SidebarProvider>
              <SidebarGroup className="p-2" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-3 ring-sidebar-ring rounded-xl text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                  {"Workspace"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent className="text-sm" sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_qhiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" aria-current="page" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M13.6903 19.4567C13.5 18.9973 13.5 18.4149 13.5 17.25C13.5 16.0851 13.5 15.5027 13.6903 15.0433C13.944 14.4307 14.4307 13.944 15.0433 13.6903C15.5027 13.5 16.0851 13.5 17.25 13.5C18.4149 13.5 18.9973 13.5 19.4567 13.6903C20.0693 13.944 20.556 14.4307 20.8097 15.0433C21 15.5027 21 16.0851 21 17.25C21 18.4149 21 18.9973 20.8097 19.4567C20.556 20.0693 20.0693 20.556 19.4567 20.8097C18.9973 21 18.4149 21 17.25 21C16.0851 21 15.5027 21 15.0433 20.8097C14.4307 20.556 13.944 20.0693 13.6903 19.4567Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M13.6903 8.95671C13.5 8.49728 13.5 7.91485 13.5 6.75C13.5 5.58515 13.5 5.00272 13.6903 4.54329C13.944 3.93072 14.4307 3.44404 15.0433 3.1903C15.5027 3 16.0851 3 17.25 3C18.4149 3 18.9973 3 19.4567 3.1903C20.0693 3.44404 20.556 3.93072 20.8097 4.54329C21 5.00272 21 5.58515 21 6.75C21 7.91485 21 8.49728 20.8097 8.95671C20.556 9.56928 20.0693 10.056 19.4567 10.3097C18.9973 10.5 18.4149 10.5 17.25 10.5C16.0851 10.5 15.5027 10.5 15.0433 10.3097C14.4307 10.056 13.944 9.56928 13.6903 8.95671Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M3.1903 19.4567C3 18.9973 3 18.4149 3 17.25C3 16.0851 3 15.5027 3.1903 15.0433C3.44404 14.4307 3.93072 13.944 4.54329 13.6903C5.00272 13.5 5.58515 13.5 6.75 13.5C7.91485 13.5 8.49728 13.5 8.95671 13.6903C9.56928 13.944 10.056 14.4307 10.3097 15.0433C10.5 15.5027 10.5 16.0851 10.5 17.25C10.5 18.4149 10.5 18.9973 10.3097 19.4567C10.056 20.0693 9.56928 20.556 8.95671 20.8097C8.49728 21 7.91485 21 6.75 21C5.58515 21 5.00272 21 4.54329 20.8097C3.93072 20.556 3.44404 20.0693 3.1903 19.4567Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M3.1903 8.95671C3 8.49728 3 7.91485 3 6.75C3 5.58515 3 5.00272 3.1903 4.54329C3.44404 3.93072 3.93072 3.44404 4.54329 3.1903C5.00272 3 5.58515 3 6.75 3C7.91485 3 8.49728 3 8.95671 3.1903C9.56928 3.44404 10.056 3.93072 10.3097 4.54329C10.5 5.00272 10.5 5.58515 10.5 6.75C10.5 7.91485 10.5 8.49728 10.3097 8.95671C10.056 9.56928 9.56928 10.056 8.95671 10.3097C8.49728 10.5 7.91485 10.5 6.75 10.5C5.58515 10.5 5.00272 10.5 4.54329 10.3097C3.93072 10.056 3.44404 9.56928 3.1903 8.95671Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span>
                          {"Overview"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_qiiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-runs">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span className="truncate">
                          {"Runs"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_qjiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/approvals">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371L21 7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M9 11.5C9 11.5 10.4079 11.7519 11 13.5C11 13.5 12.5 10.5 15 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span>
                          {"Approvals"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <SidebarMenuBadge className="absolute font-medium h-5 min-w-5 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground pointer-events-none px-1 right-1 rounded-xl text-sidebar-foreground text-xs" sidebar="menu-badge">
                        {"8"}
                      </SidebarMenuBadge>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_qkiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/evals">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M14.4725 2V7.86783C14.4725 8.43028 14.4725 8.71151 14.5473 8.9786C14.6221 9.2457 14.7679 9.48521 15.0594 9.96422L18.6743 15.9036C20.3166 18.602 21.1377 19.9512 20.5716 20.9756C20.0054 22 18.4386 22 15.305 22H8.69496C5.56136 22 3.99455 22 3.42841 20.9756C2.86227 19.9512 3.68343 18.602 5.32575 15.9036L8.94061 9.96422C9.23215 9.48521 9.37792 9.2457 9.45269 8.9786C9.52746 8.71151 9.52746 8.43028 9.52746 7.86783V2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M8 2H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M19 16.7232C18.4694 16.8939 17.8143 17 17 17C14 17 11 14 8 14C7.65244 14 7.31998 14.0181 7 14.0512" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span>
                          {"Evals"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_qliej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/flags">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M5.0249 21C5.04385 19.2643 5.04366 17.5541 5.0366 15.9209M5.0366 15.9209C5.01301 10.4614 4.91276 5.86186 5.19475 4.04271C5.5611 1.67939 9.39301 3.82993 13.9703 5.59842L16.0328 6.48729C17.5508 7.1415 19.7187 8.30352 18.7662 9.66084C18.3738 10.22 17.56 10.8596 16.0575 11.567L5.0366 15.9209Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span>
                          {"Flags"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_qmiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/memory">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M16.998 7.12652C17.3182 7.04393 17.654 7 18 7C20.2091 7 22 8.79086 22 11C22 13.2091 20.2091 15 18 15C17.6451 15 17.3009 14.9538 16.9733 14.867M16.998 7.12652C16.9993 7.08451 17 7.04233 17 7C17 4.79086 15.2091 3 13 3C11.0824 3 9.47994 4.34939 9.09041 6.15043M16.998 7.12652C16.9769 7.80763 16.7854 8.44584 16.4649 9M16.9733 14.867C16.9909 14.7472 17 14.6247 17 14.5C17 13.2905 16.1411 12.2816 15 12.05M16.9733 14.867C16.7957 16.0737 15.756 17 14.5 17H14C11.7909 17 10 18.7909 10 21M9.09041 6.15043C8.74377 6.05243 8.37801 6 8 6C5.79086 6 4 7.79086 4 10C4 10.3886 4.05542 10.7643 4.15878 11.1195M9.09041 6.15043C10.1015 6.43625 10.9498 7.10965 11.4649 8M4.15878 11.1195C2.9114 11.4832 2 12.6352 2 14C2 15.6569 3.34315 17 5 17C6.30622 17 7.41746 16.1652 7.82929 15M4.15878 11.1195C4.24921 11.4303 4.37632 11.7255 4.53513 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M11.8361 11.7435C11.3257 12.2353 10.453 12.3202 9.70713 11.9008C8.9612 11.4814 8.58031 10.6917 8.73535 10" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                        </svg>
                        <span>
                          {"Memory"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_qniej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tools">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="currentColor" strokeWidth={1.5}></path>
                          <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                          <path d="M5.50896 18.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                        </svg>
                        <span>
                          {"Tools"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_qoiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-providers">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M19 4H5C4.06812 4 3.60218 4 3.23463 4.15224C2.74458 4.35523 2.35523 4.74458 2.15224 5.23463C2 5.60218 2 6.06812 2 7C2 7.93188 2 8.39782 2.15224 8.76537C2.35523 9.25542 2.74458 9.64477 3.23463 9.84776C3.60218 10 4.06812 10 5 10H19C19.9319 10 20.3978 10 20.7654 9.84776C21.2554 9.64477 21.6448 9.25542 21.8478 8.76537C22 8.39782 22 7.93188 22 7C22 6.06812 22 5.60218 21.8478 5.23463C21.6448 4.74458 21.2554 4.35523 20.7654 4.15224C20.3978 4 19.9319 4 19 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M19 14H5C4.06812 14 3.60218 14 3.23463 14.1522C2.74458 14.3552 2.35523 14.7446 2.15224 15.2346C2 15.6022 2 16.0681 2 17C2 17.9319 2 18.3978 2.15224 18.7654C2.35523 19.2554 2.74458 19.6448 3.23463 19.8478C3.60218 20 4.06812 20 5 20H19C19.9319 20 20.3978 20 20.7654 19.8478C21.2554 19.6448 21.6448 19.2554 21.8478 18.7654C22 18.3978 22 17.9319 22 17C22 16.0681 22 15.6022 21.8478 15.2346C21.6448 14.7446 21.2554 14.3552 20.7654 14.1522C20.3978 14 19.9319 14 19 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M6.125 7H6M6.25 7C6.25 7.13807 6.13807 7.25 6 7.25C5.86193 7.25 5.75 7.13807 5.75 7C5.75 6.86193 5.86193 6.75 6 6.75C6.13807 6.75 6.25 6.86193 6.25 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M10.125 7H10M10.25 7C10.25 7.13807 10.1381 7.25 10 7.25C9.86193 7.25 9.75 7.13807 9.75 7C9.75 6.86193 9.86193 6.75 10 6.75C10.1381 6.75 10.25 6.86193 10.25 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M6.125 17H6M6.25 17C6.25 17.1381 6.13807 17.25 6 17.25C5.86193 17.25 5.75 17.1381 5.75 17C5.75 16.8619 5.86193 16.75 6 16.75C6.13807 16.75 6.25 16.8619 6.25 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M10.125 17H10M10.25 17C10.25 17.1381 10.1381 17.25 10 17.25C9.86193 17.25 9.75 17.1381 9.75 17C9.75 16.8619 9.86193 16.75 10 16.75C10.1381 16.75 10.25 16.8619 10.25 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span className="truncate">
                          {"Providers"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_qpiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-costs">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M9.14844 14.999C9.54108 15.9665 10.6694 16.6654 12.0002 16.6654C13.657 16.6654 15.0002 15.974 15.0002 14.2456C15.0002 12.5172 14.0002 11.8259 12.0002 11.8259C10.0002 11.8259 9.25017 11.0882 9.25017 9.75178C9.25017 8.41539 10.4814 7.33203 12.0002 7.33203C13.2203 7.33203 14.2548 8.03119 14.6145 8.99902" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                          <path d="M12 6L12 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        <span className="truncate">
                          {"Costs"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_qqiej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                          <path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="currentColor" strokeWidth={1.5}></path>
                        </svg>
                        <span className="truncate">
                          {"Settings"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
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
                <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-3 ring-sidebar-ring rounded-xl text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full whitespace-nowrap" aria-expanded="true" aria-controls="shortcuts-list" sidebar="group-label">
                  {"Quick links"}
                  <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                  </svg>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent className="text-sm" sidebar="group-content" id="shortcuts-list">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_39jej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/runs/failures">
                        <span className="[&_svg]:opacity-100! [&_svg]:size-4 text-rose-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                            <path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M12 9V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"Failures"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3ajej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/providers/connections">
                        <span className="[&_svg]:opacity-100! [&_svg]:size-4 text-sky-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                            <path d="M17.854 12.16C17.471 12.6105 16.7631 12.6138 16.3165 12.1671L11.8329 7.68351C11.3862 7.23686 11.3895 6.529 11.84 6.14596L13.071 5.09939C13.9559 4.34704 15.0349 3.84824 16.2044 3.6509L16.9294 3.52858C17.614 3.41306 18.3339 3.65221 18.8475 4.16577L19.8342 5.15255C20.3478 5.66611 20.5869 6.38601 20.4714 7.07063L20.3491 7.79559C20.1518 8.9651 19.653 10.0441 18.9006 10.929L17.854 12.16Z" stroke="currentColor" strokeWidth={1.5}></path>
                            <path d="M19.5 4.5L21.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M2.5 21.5L4.5 19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M6.14596 11.84C6.52901 11.3895 7.23686 11.3862 7.68351 11.8329L12.1671 16.3165C12.6138 16.7631 12.6105 17.471 12.16 17.854L10.929 18.9006C10.0441 19.653 8.9651 20.1518 7.79559 20.3491L7.07063 20.4714C6.38601 20.5869 5.66611 20.3478 5.15255 19.8342L4.16577 18.8475C3.65221 18.3339 3.41306 17.614 3.52858 16.9294L3.6509 16.2044C3.84824 15.0349 4.34704 13.9559 5.09939 13.071L6.14596 11.84Z" stroke="currentColor" strokeWidth={1.5}></path>
                            <path d="M8.5 12.5L10.5 10.5M11.5 15.5L13.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"Connections"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3bjej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/providers/routing-rules">
                        <span className="[&_svg]:opacity-100! [&_svg]:size-4 text-violet-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                            <circle cx={18} cy={5} r={3} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></circle>
                            <circle cx={6} cy={19} r={3} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></circle>
                            <path d="M12 5H8.5C6.567 5 5 6.567 5 8.5C5 10.433 6.567 12 8.5 12H15.5C17.433 12 19 13.567 19 15.5C19 17.433 17.433 19 15.5 19H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"Routing rules"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3cjej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/costs/spend-overview">
                        <span className="[&_svg]:opacity-100! [&_svg]:size-4 text-emerald-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M9.14844 14.999C9.54108 15.9665 10.6694 16.6654 12.0002 16.6654C13.657 16.6654 15.0002 15.974 15.0002 14.2456C15.0002 12.5172 14.0002 11.8259 12.0002 11.8259C10.0002 11.8259 9.25017 11.0882 9.25017 9.75178C9.25017 8.41539 10.4814 7.33203 12.0002 7.33203C13.2203 7.33203 14.2548 8.03119 14.6145 8.99902" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                            <path d="M12 6L12 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"Spend overview"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3djej5udb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/costs/token-audit">
                        <span className="[&_svg]:opacity-100! [&_svg]:size-4 text-amber-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                            <path d="M8.06805 2.72546L7.89604 2.86189C7.71084 3.00878 7.61823 3.08223 7.52605 3.12852C7.20698 3.28874 6.8259 3.26781 6.52663 3.07364C6.44017 3.01754 6.35631 2.93441 6.1886 2.76813C5.78856 2.37152 5.58853 2.17321 5.43777 2.10043C4.89824 1.83999 4.25045 2.10601 4.0547 2.6684C4 2.82556 4 3.10601 4 3.66691V20.698C4 20.9548 4 21.0832 4.01158 21.158C4.12554 21.8938 4.98624 22.2473 5.59159 21.8069C5.65313 21.7621 5.74474 21.6713 5.92789 21.4897C6.0431 21.3755 6.10079 21.3183 6.15539 21.2735C6.66242 20.8578 7.38352 20.8182 7.93376 21.1759C7.99303 21.2144 8.05667 21.2649 8.18395 21.3658L8.32009 21.4738C8.55044 21.6565 8.66564 21.7479 8.78105 21.8104C9.22912 22.053 9.77088 22.053 10.219 21.8104C10.3344 21.7479 10.4495 21.6565 10.6799 21.4738L10.75 21.4182C11.047 21.1827 11.1955 21.0649 11.3484 20.9918C11.7601 20.7949 12.2399 20.7949 12.6516 20.9918C12.8045 21.0649 12.953 21.1827 13.25 21.4182L13.3201 21.4738C13.5505 21.6565 13.6656 21.7479 13.781 21.8104C14.2291 22.053 14.7709 22.053 15.219 21.8104C15.3344 21.7479 15.4496 21.6565 15.6799 21.4738L15.816 21.3658C15.9433 21.2649 16.007 21.2144 16.0662 21.1759C16.6165 20.8182 17.3376 20.8578 17.8446 21.2735C17.8992 21.3183 17.9569 21.3755 18.0721 21.4897C18.2553 21.6713 18.3469 21.7621 18.4084 21.8069C19.0138 22.2473 19.8745 21.8938 19.9884 21.158C20 21.0832 20 20.9548 20 20.698V3.66691C20 3.10601 20 2.82556 19.9453 2.6684C19.7495 2.10601 19.1018 1.83999 18.5622 2.10043C18.4115 2.17321 18.2114 2.37152 17.8114 2.76813C17.6437 2.93441 17.5598 3.01754 17.4734 3.07364C17.1741 3.26781 16.793 3.28874 16.4739 3.12852C16.3818 3.08223 16.2892 3.00878 16.104 2.86189L15.932 2.72546C15.4614 2.35223 15.2261 2.16562 14.9695 2.08178C14.6646 1.98214 14.3354 1.98214 14.0305 2.08178C13.7739 2.16562 13.5386 2.35224 13.068 2.72546L13 2.77943C12.6428 3.06273 12.4642 3.20438 12.2661 3.2586C12.092 3.30627 11.908 3.30627 11.7339 3.2586C11.5358 3.20438 11.3572 3.06273 11 2.77943L10.932 2.72546C10.4614 2.35223 10.2261 2.16562 9.96953 2.08178C9.66458 1.98214 9.33542 1.98214 9.03047 2.08178C8.7739 2.16562 8.53862 2.35223 8.06805 2.72546Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M8 12H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M8 8H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            <path d="M8 16H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"Token audit"}
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
              <div className="mt-auto">
                <SidebarProvider>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden p-2" sidebar="group">
                  <div className="group/card mt-5 overflow-hidden">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] border-border md:w-[222px] shrink-0" spacing="xs">
                      <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                        <div className="font-semibold text-warning text-xs">
                          {"Spending Limit"}
                        </div>
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] space-y-2">
                        <p className="leading-snug text-muted-foreground text-xs">
                          {"$95.10 of $144.09 this period. Resets Oct 16."}
                        </p>
                        <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                          <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                          <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" aria-valuetext="66%" role="progressbar">
                            <ProgressTrack className="bg-muted h-3 rounded-full" progressing="">
                              <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "66%"}}></ProgressIndicator>
                            </ProgressTrack>
                            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                              {"x"}
                            </span>
                          </Progress>
                        </div>
                        <div className="flex items-center justify-between leading-none text-xs">
                          <div className="flex gap-1 items-center">
                            <span className="font-semibold text-foreground">
                              {"66%"}
                            </span>
                            <span className="text-muted-foreground">
                              {"Used"}
                            </span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="font-semibold text-foreground">
                              {"34%"}
                            </span>
                            <span className="text-muted-foreground">
                              {"Free"}
                            </span>
                          </div>
                        </div>
                      </FramePanel>
                    </Frame>
                  </div>
                </SidebarGroup>
                </SidebarProvider>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-2 p-2" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu className="gap-0.5" sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:ml-0! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden peer/menu-button pr-0! px-3 py-2 ring-sidebar-ring rounded-xl text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_3ij5udb_" aria-expanded="false">
                    <div className="flex flex-1 gap-2 in-data-[state=collapsed]:justify-center items-center min-w-0">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 in-data-[state=collapsed]:size-6! rounded-md size-7" size="default">
                        <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <div className="flex flex-col in-data-[state=collapsed]:hidden min-w-0">
                        <span className="font-medium text-xs truncate">
                          {"Nick Bold"}
                        </span>
                        <span className="gap-1 inline-flex items-center">
                          <svg className="shrink-0 size-3!" viewBox="0 0 28 28" fill="none" width="100%" height="100%" aria-hidden="true">
                            <defs>
                              <lineargradient id="_R_1krij5udb_" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#6366f1"></stop>
                                <stop offset="50%" stopColor="#8b5cf6"></stop>
                                <stop offset="100%" stopColor="#ec4899"></stop>
                              </lineargradient>
                            </defs>
                            <circle cx={14} cy={14} r={14} fill="url(#_R_1krij5udb_)"></circle>
                          </svg>
                          <span className="text-[10px] text-muted-foreground truncate">
                            {"Atlas"}
                          </span>
                        </span>
                      </div>
                    </div>
                    <svg className="in-data-[state=collapsed]:hidden ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                      <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
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
      <SidebarInset className="bg-background border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)]! md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-2xl md:peer-data-[variant=inset]:shadow-sm ml-0! overflow-hidden shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]!">
        <header className="backdrop-blur-sm bg-background/95 border-b border-border/60 flex gap-4 h-12 items-center justify-between px-4 shrink-0 sticky top-0 z-10">
          <div className="flex gap-2 items-center min-w-0">
            <SidebarProvider>
            <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center md:hidden outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor">
                <path d="M13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                <path d="M9 3V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <Breadcrumb className="min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-1.5 sm:gap-2.5 text-muted-foreground text-sm">
                <BreadcrumbItem className="flex gap-1.5 min-w-0">
                  <BreadcrumbLink className="flex gap-1.5 hover:text-foreground items-center min-w-0 transition-colors" aria-label="Atlas" href="/">
                    <span className="flex items-center shrink-0 size-4">
                      <svg className="shrink-0" viewBox="0 0 28 28" fill="none" width="100%" height="100%" aria-hidden="true">
                        <defs>
                          <lineargradient id="_R_j5r5udb_" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#6366f1"></stop>
                            <stop offset="50%" stopColor="#8b5cf6"></stop>
                            <stop offset="100%" stopColor="#ec4899"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx={14} cy={14} r={14} fill="url(#_R_j5r5udb_)"></circle>
                      </svg>
                    </span>
                    <span className="hidden lg:inline truncate">
                      {"Atlas"}
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 shrink-0" role="presentation" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor">
                    <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex gap-1.5 min-w-0">
                  <BreadcrumbLink className="flex gap-1.5 hover:text-foreground items-center min-w-0 transition-colors" type="button" aria-label="Nick Bold">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                      <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="hidden md:inline truncate">
                      {"Nick Bold"}
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 shrink-0" role="presentation" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor">
                    <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1.5 min-w-0">
                  <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                    {"Overview"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 items-center shrink-0">
            <Popover>
            <PopoverTrigger className="border border-border focus-visible:ring-2 focus-visible:ring-ring gap-1.5 h-8 hover:bg-accent inline-flex items-center outline-none px-3 relative rounded-4xl transition-colors" type="button" aria-label="System monitor" tabIndex={0} baseUiClickTrigger="" id="base-ui-_R_6pr5udb_" aria-haspopup="dialog" aria-expanded="false">
              <span className="flex items-center justify-center relative size-3.5">
                <svg className="duration-300 size-3.5 text-destructive transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                  <path d="M2 12H6L7.5 8L9.5 15L13 6L15.5 18L18 12H22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                </svg>
                <span className="absolute animate-ping bg-destructive/25 inset-0 rounded-full" aria-hidden="true"></span>
              </span>
              <span className="font-medium hidden sm:inline text-foreground text-xs">
                {"System Status"}
              </span>
            </PopoverTrigger>
            </Popover>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 min-h-0 outline-none overflow-y-auto" id="main-content" tabIndex={-1}>
          <h1 className="sr-only">
            {"Overview"}
          </h1>
          <div className="bg-background flex flex-col min-h-svh w-full">
            <div className="p-4 w-full">
              <div className="@container w-full">
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-2.5 items-center">
                      <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                        {"Agent Operations"}
                      </h2>
                      <span className="flex gap-1.5 items-center">
                        <span className="flex relative shrink-0 size-2" aria-hidden="true">
                          <span className="absolute animate-ping bg-emerald-500/60 inline-flex rounded-full size-full"></span>
                          <span className="bg-emerald-500 inline-flex relative rounded-full size-2"></span>
                        </span>
                        <span className="hidden sm:block text-muted-foreground text-sm">
                          {"Live"}
                        </span>
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"Live run health, approvals, and incidents"}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center shrink-0">
                    <Select>
                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-input/50 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-[size=default]:h-9 data-[size=sm]:h-8 data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 gap-1.5 min-w-[176px] px-3 py-2 rounded-3xl text-sm transition-[color,box-shadow,background-color]" type="button" tabIndex={0} id="base-ui-_R_6clur5udb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Reporting range">
                      <svg className="size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                        <path d="M12 17.875V18M12.25 18C12.25 18.1381 12.1381 18.25 12 18.25C11.8619 18.25 11.75 18.1381 11.75 18C11.75 17.8619 11.8619 17.75 12 17.75C12.1381 17.75 12.25 17.8619 12.25 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M12 13.875V14M12.25 14C12.25 14.1381 12.1381 14.25 12 14.25C11.8619 14.25 11.75 14.1381 11.75 14C11.75 13.8619 11.8619 13.75 12 13.75C12.1381 13.75 12.25 13.8619 12.25 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M7.25 17.875V18M7.5 18C7.5 18.1381 7.38807 18.25 7.25 18.25C7.11193 18.25 7 18.1381 7 18C7 17.8619 7.11193 17.75 7.25 17.75C7.38807 17.75 7.5 17.8619 7.5 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M7.25 13.875V14M7.5 14C7.5 14.1381 7.38807 14.25 7.25 14.25C7.11193 14.25 7 14.1381 7 14C7 13.8619 7.11193 13.75 7.25 13.75C7.38807 13.75 7.5 13.8619 7.5 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M16.75 13.875V14M17 14C17 14.1381 16.8881 14.25 16.75 14.25C16.6119 14.25 16.5 14.1381 16.5 14C16.5 13.8619 16.6119 13.75 16.75 13.75C16.8881 13.75 17 13.8619 17 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M16 2V6M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M3 10H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                      </svg>
                      <SelectValue className="flex flex-1 text-left">
                        {"Last 24 hours"}
                      </SelectValue>
                      <svg className="pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_R_6clur5udb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex={-1} aria-hidden="true" value="24H" />
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-3 rounded-4xl text-primary-foreground text-sm" type="button" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                        <path d="M12.001 5.00003V19.002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        <path d="M19.002 12.002L4.99998 12.002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                      </svg>
                      <span className="hidden sm:block">
                        {"New Agent"}
                      </span>
                    </Button>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More options" aria-haspopup="menu" id="base-ui-_R_1uclur5udb_" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                        <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="@4xl:grid-cols-3 gap-4 grid grid-cols-1 mt-4">
                  <div className="@4xl:col-span-3 @container w-full">
                    <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-4 grid">
                      <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full" spacing="sm">
                        <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)]">
                          <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] bg-indigo-600 flex mb-3.5 rounded-(--icon-tile-radius) text-white" variant="elevated" size="default">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                              <path d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                            </svg>
                          </IconTile>
                          <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                            {"Autonomous Runs"}
                          </a>
                          <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                            {"1,263 runs, 96% clean"}
                          </p>
                        </FramePanel>
                      </Frame>
                      <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full" spacing="sm">
                        <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)]">
                          <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] bg-amber-600 flex mb-3.5 rounded-(--icon-tile-radius) text-white" variant="elevated" size="default">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                              <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              <path d="M3 20C3 16.134 6.13401 13 10 13C11.9587 13 13.7295 13.8045 15 15.101" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              <path d="M13 18.5C13 18.5 14.3485 19.0067 15 21C15 21 18.1765 16 21 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            </svg>
                          </IconTile>
                          <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                            {"Approval Backlog"}
                          </a>
                          <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                            {"12 pending, oldest 38m"}
                          </p>
                        </FramePanel>
                      </Frame>
                      <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full" spacing="sm">
                        <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)]">
                          <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] bg-emerald-600 flex mb-3.5 rounded-(--icon-tile-radius) text-white" variant="elevated" size="default">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                              <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="currentColor" strokeWidth={1.5}></path>
                              <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                              <path d="M5.50896 18.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                            </svg>
                          </IconTile>
                          <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                            {"Tool Reliability"}
                          </a>
                          <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                            {"96.2% of calls succeeded"}
                          </p>
                        </FramePanel>
                      </Frame>
                      <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full" spacing="sm">
                        <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)]">
                          <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] bg-rose-600 flex mb-3.5 rounded-(--icon-tile-radius) text-white" variant="elevated" size="default">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                              <path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              <path d="M12 9V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              <path d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                            </svg>
                          </IconTile>
                          <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                            {"Open Incidents"}
                          </a>
                          <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                            {"1 active, 2 resolved"}
                          </p>
                        </FramePanel>
                      </Frame>
                    </div>
                  </div>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @4xl:col-span-2 [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full" spacing="sm">
                    <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-semibold text-sm">
                        {"Run Throughput"}
                      </div>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-input/50 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-[size=default]:h-9 data-[size=sm]:h-8 data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 gap-1.5 min-w-[140px] px-3 py-2 rounded-3xl text-sm transition-[color,box-shadow,background-color]" type="button" tabIndex={0} id="base-ui-_R_2aklur5udb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                        <SelectValue className="flex flex-1 text-left">
                          {"Last 24 hours"}
                        </SelectValue>
                        <svg className="pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                          <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_R_2aklur5udb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex={-1} aria-hidden="true" value="24H" />
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col gap-6">
                      <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
                        <div className="space-y-1">
                          <div className="flex gap-2.5 items-center">
                            <div className="bg-border/60 h-12 rounded-full w-0.5"></div>
                            <div className="flex flex-col gap-2">
                              <div className="font-medium text-muted-foreground text-xs">
                                {"Completed"}
                              </div>
                              <div className="flex gap-2.5 items-center">
                                <span className="font-semibold leading-none text-base">
                                  {"1,041"}
                                </span>
                                <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                    <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                    <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  </svg>
                                  {"6"}
                                  {"%"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex gap-2.5 items-center">
                            <div className="bg-border/60 h-12 rounded-full w-0.5"></div>
                            <div className="flex flex-col gap-2">
                              <div className="font-medium text-muted-foreground text-xs">
                                {"Running"}
                              </div>
                              <div className="flex gap-2.5 items-center">
                                <span className="font-semibold leading-none text-base">
                                  {"105"}
                                </span>
                                <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-destructive text-xs">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                    <path d="M20 11V16H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                    <path d="M20 16L15 11C14.1174 10.1174 13.6762 9.67615 13.1346 9.62737C13.045 9.6193 12.955 9.6193 12.8654 9.62737C12.3238 9.67615 11.8826 10.1174 11 11C10.1174 11.8826 9.67615 12.3238 9.13457 12.3726C9.04504 12.3807 8.95496 12.3807 8.86543 12.3726C8.32385 12.3238 7.88256 11.8826 7 11L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  </svg>
                                  {"6"}
                                  {"%"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex gap-2.5 items-center">
                            <div className="bg-border/60 h-12 rounded-full w-0.5"></div>
                            <div className="flex flex-col gap-2">
                              <div className="font-medium text-muted-foreground text-xs">
                                {"Waiting"}
                              </div>
                              <div className="flex gap-2.5 items-center">
                                <span className="font-semibold leading-none text-base">
                                  {"66"}
                                </span>
                                <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-destructive text-xs">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                    <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                    <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  </svg>
                                  {"14"}
                                  {"%"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex gap-2.5 items-center">
                            <div className="bg-border/60 h-12 rounded-full w-0.5"></div>
                            <div className="flex flex-col gap-2">
                              <div className="font-medium text-muted-foreground text-xs">
                                {"Failed"}
                              </div>
                              <div className="flex gap-2.5 items-center">
                                <span className="font-semibold leading-none text-base">
                                  {"51"}
                                </span>
                                <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-destructive text-xs">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                    <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                    <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  </svg>
                                  {"16"}
                                  {"%"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-[250px] justify-center mt-auto text-xs w-full" data-chart="chart-_R_2iklur5udb_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_2iklur5udb_] {\n  --color-completed: var(--color-indigo-400);\n  --color-running: var(--color-indigo-500);\n  --color-waiting: var(--color-indigo-600);\n  --color-failed: var(--color-indigo-700);\n}\n\n\n.dark [data-chart=chart-_R_2iklur5udb_] {\n  --color-completed: var(--color-indigo-400);\n  --color-running: var(--color-indigo-500);\n  --color-waiting: var(--color-indigo-600);\n  --color-failed: var(--color-indigo-700);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                          <div style={{width: "0", height: "0", overflow: "visible"}}>
                            <div className="recharts-wrapper" width={623} height={250} style={{position: "relative", cursor: "default", width: "623px", height: "250px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex={0} width={623} height={250} viewBox="0 0 623 250" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                                  <g className="recharts-cartesian-grid">
                                    <g className="recharts-cartesian-grid-horizontal">
                                      <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={5} y={10} width={613} height={200} x1={5} y1={210} x2={618} y2={210}></line>
                                      <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={5} y={10} width={613} height={200} x1={5} y1={160} x2={618} y2={160}></line>
                                      <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={5} y={10} width={613} height={200} x1={5} y1={110} x2={618} y2={110}></line>
                                      <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={5} y={10} width={613} height={200} x1={5} y1={60} x2={618} y2={60}></line>
                                      <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={5} y={10} width={613} height={200} x1={5} y1={10} x2={618} y2={10}></line>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                                <defs>
                                  <clippath id="recharts1-clip">
                                    <rect x={5} y={10} height={200} width={613}></rect>
                                  </clippath>
                                </defs>
                                <defs>
                                  <lineargradient id="run-throughput-completed" x1={0} y1={0} x2={0} y2={1}>
                                    <stop offset="5%" stopColor="var(--color-indigo-400)" stopOpacity={0.8}></stop>
                                    <stop offset="95%" stopColor="var(--color-indigo-400)" stopOpacity={0.1}></stop>
                                  </lineargradient>
                                  <lineargradient id="run-throughput-running" x1={0} y1={0} x2={0} y2={1}>
                                    <stop offset="5%" stopColor="var(--color-indigo-500)" stopOpacity={0.8}></stop>
                                    <stop offset="95%" stopColor="var(--color-indigo-500)" stopOpacity={0.1}></stop>
                                  </lineargradient>
                                  <lineargradient id="run-throughput-waiting" x1={0} y1={0} x2={0} y2={1}>
                                    <stop offset="5%" stopColor="var(--color-indigo-600)" stopOpacity={0.8}></stop>
                                    <stop offset="95%" stopColor="var(--color-indigo-600)" stopOpacity={0.1}></stop>
                                  </lineargradient>
                                  <lineargradient id="run-throughput-failed" x1={0} y1={0} x2={0} y2={1}>
                                    <stop offset="5%" stopColor="var(--color-indigo-700)" stopOpacity={0.8}></stop>
                                    <stop offset="95%" stopColor="var(--color-indigo-700)" stopOpacity={0.1}></stop>
                                  </lineargradient>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                                  <g className="recharts-area recharts-layer">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#run-throughput-failed)" fillOpacity={0.6} height={200} stroke="none" width={613} id="recharts-area-_r_0_" d="M5,206.25C45.867,206.647,86.733,207.043,127.6,206.875C168.467,206.707,209.333,205.973,250.2,205.625C291.067,205.277,331.933,205.315,372.8,204.375C413.667,203.435,454.533,201.517,495.4,201.25C536.267,200.983,577.133,202.366,618,203.75L618,210C577.133,210,536.267,210,495.4,210C454.533,210,413.667,210,372.8,210C331.933,210,291.067,210,250.2,210C209.333,210,168.467,210,127.6,210C86.733,210,45.867,210,5,210Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-700)" width={613} d="M5,206.25C45.867,206.647,86.733,207.043,127.6,206.875C168.467,206.707,209.333,205.973,250.2,205.625C291.067,205.277,331.933,205.315,372.8,204.375C413.667,203.435,454.533,201.517,495.4,201.25C536.267,200.983,577.133,202.366,618,203.75"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-area recharts-layer">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#run-throughput-waiting)" fillOpacity={0.6} height={200} stroke="none" width={613} id="recharts-area-_r_1_" d="M5,200.625C45.867,201.899,86.733,203.173,127.6,203.125C168.467,203.077,209.333,201.708,250.2,200.625C291.067,199.542,331.933,198.747,372.8,196.25C413.667,193.753,454.533,189.554,495.4,189.375C536.267,189.196,577.133,193.035,618,196.875L618,203.75C577.133,202.366,536.267,200.983,495.4,201.25C454.533,201.517,413.667,203.435,372.8,204.375C331.933,205.315,291.067,205.277,250.2,205.625C209.333,205.973,168.467,206.707,127.6,206.875C86.733,207.043,45.867,206.647,5,206.25Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-600)" width={613} d="M5,200.625C45.867,201.899,86.733,203.173,127.6,203.125C168.467,203.077,209.333,201.708,250.2,200.625C291.067,199.542,331.933,198.747,372.8,196.25C413.667,193.753,454.533,189.554,495.4,189.375C536.267,189.196,577.133,193.035,618,196.875"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-area recharts-layer">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#run-throughput-running)" fillOpacity={0.6} height={200} stroke="none" width={613} id="recharts-area-_r_2_" d="M5,191.875C45.867,194.529,86.733,197.182,127.6,197.5C168.467,197.818,209.333,195.8,250.2,193.125C291.067,190.45,331.933,187.116,372.8,181.875C413.667,176.634,454.533,169.485,495.4,170C536.267,170.515,577.133,178.695,618,186.875L618,196.875C577.133,193.035,536.267,189.196,495.4,189.375C454.533,189.554,413.667,193.753,372.8,196.25C331.933,198.747,291.067,199.542,250.2,200.625C209.333,201.708,168.467,203.077,127.6,203.125C86.733,203.173,45.867,201.899,5,200.625Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-500)" width={613} d="M5,191.875C45.867,194.529,86.733,197.182,127.6,197.5C168.467,197.818,209.333,195.8,250.2,193.125C291.067,190.45,331.933,187.116,372.8,181.875C413.667,176.634,454.533,169.485,495.4,170C536.267,170.515,577.133,178.695,618,186.875"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-area recharts-layer">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#run-throughput-completed)" fillOpacity={0.6} height={200} stroke="none" width={613} id="recharts-area-_r_3_" d="M5,121.25C45.867,141.116,86.733,160.983,127.6,150C168.467,139.017,209.333,97.185,250.2,67.5C291.067,37.815,331.933,20.277,372.8,15C413.667,9.723,454.533,16.707,495.4,30.625C536.267,44.543,577.133,65.397,618,86.25L618,186.875C577.133,178.695,536.267,170.515,495.4,170C454.533,169.485,413.667,176.634,372.8,181.875C331.933,187.116,291.067,190.45,250.2,193.125C209.333,195.8,168.467,197.818,127.6,197.5C86.733,197.182,45.867,194.529,5,191.875Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-400)" width={613} d="M5,121.25C45.867,141.116,86.733,160.983,127.6,150C168.467,139.017,209.333,97.185,250.2,67.5C291.067,37.815,331.933,20.277,372.8,15C413.667,9.723,454.533,16.707,495.4,30.625C536.267,44.543,577.133,65.397,618,86.25"></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                                  <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                    <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                      <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                  <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={613} stroke="none" fontSize="12" x={127.6} y={226} textAnchor="middle" fill="#666">
                                        <tspan x={127.6} dy="0.71em">
                                          {"04:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={613} stroke="none" fontSize="12" x={250.2} y={226} textAnchor="middle" fill="#666">
                                        <tspan x={250.2} dy="0.71em">
                                          {"08:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={613} stroke="none" fontSize="12" x={372.79999999999995} y={226} textAnchor="middle" fill="#666">
                                        <tspan x={372.79999999999995} dy="0.71em">
                                          {"12:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={613} stroke="none" fontSize="12" x={495.4} y={226} textAnchor="middle" fill="#666">
                                        <tspan x={495.4} dy="0.71em">
                                          {"16:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={613} stroke="none" fontSize="12" x={606.25} y={226} textAnchor="middle" fill="#666">
                                        <tspan x={606.25} dy="0.71em">
                                          {"20:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      </ChartContainer>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @4xl:col-span-1 [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full" spacing="sm">
                    <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-semibold text-sm">
                        {"Incident Activity"}
                      </div>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-3 rounded-4xl text-sm" type="button" tabIndex={0} aria-label="Export incident activity">
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" data-icon="inline-start" aria-hidden="true">
                          <path d="M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                          <path d="M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                        </svg>
                        {"Export"}
                      </Button>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col">
                      <Timeline data-orientation="vertical">
                        <TimelineItem className="ms-8 pb-8" completed="true">
                          <TimelineHeader>
                            <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                            <div className="flex flex-wrap gap-2 items-center">
                              <TimelineTitle className="font-semibold">
                                {"Payment Tool Timeout"}
                              </TimelineTitle>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Critical"}
                              </Badge>
                            </div>
                            <TimelineIndicator className="bg-muted border-none flex items-center justify-center ring-2 ring-primary/20 size-6 text-muted-foreground" aria-hidden="true">
                              <Spinner className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" role="status" aria-label="Loading">
                                <path d="M12 3V6" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M12 18V21" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M21 12L18 12" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M6 12L3 12" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M7.75804 16.2422L5.63672 18.3635" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                <path d="M7.75804 7.75804L5.63672 5.63672" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                              </Spinner>
                            </TimelineIndicator>
                          </TimelineHeader>
                          <TimelineContent className="mt-1.5">
                            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                              <span className="[&_svg]:size-3.5 [&_svg]:text-muted-foreground">
                                <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                  <path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  <path d="M12 9V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  <path d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                </svg>
                              </span>
                              <span className="font-medium">
                                {"Refund Resolver / 09:12"}
                              </span>
                            </div>
                            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                              {"The billing API exceeded its 8s budget on 6 consecutive calls, holding 4 runs at the charge step."}
                            </p>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem className="ms-8 pb-8">
                          <TimelineHeader>
                            <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                            <div className="flex flex-wrap gap-2 items-center">
                              <TimelineTitle className="font-semibold">
                                {"Retry Storm Contained"}
                              </TimelineTitle>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Major"}
                              </Badge>
                            </div>
                            <TimelineIndicator className="bg-primary border-none flex items-center justify-center size-6 text-primary-foreground" aria-hidden="true">
                              <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor">
                                <path d="M5 13.2592L7.58583 15.9568C8.2525 16.6523 8.58583 17.0001 9.00004 17.0001C9.41425 17.0001 9.74759 16.6523 10.4143 15.9568L19 7.00006" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              </svg>
                            </TimelineIndicator>
                          </TimelineHeader>
                          <TimelineContent className="mt-1.5">
                            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                              <span className="[&_svg]:size-3.5 [&_svg]:text-muted-foreground">
                                <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                  <path d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                </svg>
                              </span>
                              <span className="font-medium">
                                {"Invoice Reconciler / 08:47"}
                              </span>
                            </div>
                            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                              {"Backoff was applied after a vendor 503 spike, capping retries and clearing the queued run backlog."}
                            </p>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem className="ms-8 pb-0">
                          <TimelineHeader>
                            <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                            <div className="flex flex-wrap gap-2 items-center">
                              <TimelineTitle className="font-semibold">
                                {"Vector Store Degraded"}
                              </TimelineTitle>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Minor"}
                              </Badge>
                            </div>
                            <TimelineIndicator className="bg-primary border-none flex items-center justify-center size-6 text-primary-foreground" aria-hidden="true">
                              <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor">
                                <path d="M5 13.2592L7.58583 15.9568C8.2525 16.6523 8.58583 17.0001 9.00004 17.0001C9.41425 17.0001 9.74759 16.6523 10.4143 15.9568L19 7.00006" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              </svg>
                            </TimelineIndicator>
                          </TimelineHeader>
                          <TimelineContent className="mt-1.5">
                            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                              <span className="[&_svg]:size-3.5 [&_svg]:text-muted-foreground">
                                <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                  <ellipse cx={12} cy={5} rx={8} ry={3} stroke="currentColor" strokeWidth={1.5}></ellipse>
                                  <path d="M7 10.842C7.60158 11.0229 8.27434 11.1718 9 11.282" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                  <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" strokeWidth={1.5}></path>
                                  <path d="M7 17.842C7.60158 18.0229 8.27434 18.1718 9 18.282" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                  <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5" stroke="currentColor" strokeWidth={1.5}></path>
                                </svg>
                              </span>
                              <span className="font-medium">
                                {"Lead Enricher / 08:05"}
                              </span>
                            </div>
                            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                              {"Read latency on the embeddings index rose to 1.9s, slowing enrichment lookups before it recovered."}
                            </p>
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                    </FramePanel>
                  </Frame>
                  <div className="@4xl:col-span-3">
                    <section className="flex flex-col w-full">
                      <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                        <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col min-w-0">
                            <div className="font-semibold text-sm">
                              {"Run Tree"}
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                              <span className="truncate">
                                {"Atlas"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0">
                                {"All environments · sample of recent runs"}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 items-center min-w-0">
                            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                              <span className="font-medium text-muted-foreground text-xs truncate">
                                {"Workspace spend"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                {"$20.84"}
                              </Badge>
                            </div>
                            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                              <span className="font-medium text-muted-foreground text-xs truncate">
                                {"Total time"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                {"4.0m"}
                              </Badge>
                            </div>
                            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                              <span className="font-medium text-muted-foreground text-xs truncate">
                                {"Failed"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-warning-foreground text-xs transition-shadow">
                                {"6"}
                              </Badge>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground px-3 rounded-4xl text-sm" type="button" tabIndex={0}>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" data-icon="inline-start" aria-hidden="true">
                                <path d="M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                <path d="M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                              </svg>
                              {"Export"}
                            </Button>
                          </div>
                        </header>
                        <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] bg-card p-0! shadow-none!">
                          <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-3 py-3">
                            <InputGroup className="bg-input/50 border border-transparent dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 h-9 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[textarea]:rounded-2xl has-data-[align=block-end]:rounded-3xl has-data-[align=block-start]:rounded-3xl in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 lg:max-w-xs rounded-4xl transition-[color,box-shadow,background-color]" role="group">
                              <InputGroupAddon className="**:data-[slot=kbd]:bg-muted-foreground/10 **:data-[slot=kbd]:px-1.5 **:data-[slot=kbd]:rounded-3xl [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:-ml-1 has-[>kbd]:-ml-1 pl-3 py-2 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                <svg className="size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                  <path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                  <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                </svg>
                              </InputGroupAddon>
                              <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-7 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/30 h-9 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-3 py-1 ring-0 rounded-none shadow-none text-base transition-[color,box-shadow,background-color] w-full" id="base-ui-_R_15kklur5udb_" placeholder="Search steps..." aria-label="Search steps" value="" />
                            </InputGroup>
                            <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                              <div className="flex gap-2 items-center">
                                <span className="font-medium text-muted-foreground text-xs">
                                  {"Depth"}
                                </span>
                                <ToggleGroup className="data-[spacing=0]:data-[variant=outline]:rounded-3xl shrink-0" data-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Tree depth" style={{"--gap": "0"}}>
                                  <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-2.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-2.5 group-data-[spacing=0]/toggle-group:px-3 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:shadow-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-3xl group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-3xl group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-3xl group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-3xl group/toggle h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-9 outline-none px-3 rounded-3xl text-sm transition-colors whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Collapse to agents">
                                    {"Collapse"}
                                  </ToggleGroupItem>
                                  <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-2.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-2.5 group-data-[spacing=0]/toggle-group:px-3 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:shadow-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-3xl group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-3xl group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-3xl group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-3xl group/toggle h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-9 outline-none px-3 rounded-3xl text-sm transition-colors whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand to level 1">
                                    {"1"}
                                  </ToggleGroupItem>
                                  <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-2.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-2.5 group-data-[spacing=0]/toggle-group:px-3 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:shadow-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-3xl group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-3xl group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-3xl group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-3xl group/toggle h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-9 outline-none px-3 rounded-3xl text-sm transition-colors whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand to level 2">
                                    {"2"}
                                  </ToggleGroupItem>
                                  <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-2.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-2.5 group-data-[spacing=0]/toggle-group:px-3 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:shadow-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-3xl group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-3xl group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-3xl group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-3xl group/toggle h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-9 outline-none px-3 rounded-3xl text-sm transition-colors whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand all levels">
                                    {"All"}
                                  </ToggleGroupItem>
                                </ToggleGroup>
                              </div>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 group/button h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-3 rounded-4xl select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_d9kklur5udb_" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" data-icon="inline-start" aria-hidden="true">
                                  <path d="M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371L21 7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                </svg>
                                {"Risk"}
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                              <Popover>
                              <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 group/button h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-3 rounded-4xl select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_R_1lpkklur5udb_" aria-haspopup="dialog" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" data-icon="inline-start" aria-hidden="true">
                                  <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" strokeWidth={1.5}></path>
                                  <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                </svg>
                                {"Display"}
                              </PopoverTrigger>
                              </Popover>
                            </div>
                          </div>
                          <DataGrid>
                            <div className="relative">
                              <DataGridProvider>
                              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_R_6kklur5udb_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "14px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                                  <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                                    <DataGridProvider>
                                    <DataGridTableViewport style={{width: "calc(994px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                                      <DataGridProvider>
                                      <DataGridTable style={{"--header-node-size": "300", "--col-node-size": "300", "--header-ref-size": "128", "--col-ref-size": "128", "--header-tokens-size": "104", "--col-tokens-size": "104", "--header-cost-size": "186", "--col-cost-size": "186", "--header-duration-size": "116", "--col-duration-size": "116", "--header-risk-size": "104", "--col-risk-size": "104", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(994px + var(--data-grid-fill-size, 0px))"}}>
                                        <colgroup>
                                          <col style={{width: "calc(var(--col-node-size) * 1px)"}} />
                                          <col style={{width: "calc(var(--col-ref-size) * 1px)"}} />
                                          <col style={{width: "calc(var(--col-tokens-size) * 1px)"}} />
                                          <col style={{width: "calc(var(--col-cost-size) * 1px)"}} />
                                          <col style={{width: "calc(var(--col-duration-size) * 1px)"}} />
                                          <col style={{width: "calc(var(--col-risk-size) * 1px)"}} />
                                          <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                                        </colgroup>
                                        <thead>
                                          <tr className="[&>th]:border-b bg-transparent">
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-node-size) * 1px)"}}>
                                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-full select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_d96cmmkklur5udb_" aria-expanded="false">
                                                  {"Agent / run / step"}
                                                  <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                              <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                            </th>
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-ref-size) * 1px)"}}>
                                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-full select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_da6cmmkklur5udb_" aria-expanded="false">
                                                  {"Reference"}
                                                  <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                              <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                            </th>
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "calc(var(--header-tokens-size) * 1px)"}}>
                                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 rounded-full select-none shrink-0 text-right text-secondary-foreground/80 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_db6cmmkklur5udb_" aria-expanded="false">
                                                  {"Tokens"}
                                                  <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                              <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                            </th>
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "calc(var(--header-cost-size) * 1px)"}}>
                                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 rounded-full select-none shrink-0 text-right text-secondary-foreground/80 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_dc6cmmkklur5udb_" aria-expanded="false">
                                                  {"Spend"}
                                                  <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                              <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                            </th>
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "calc(var(--header-duration-size) * 1px)"}}>
                                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 rounded-full select-none shrink-0 text-right text-secondary-foreground/80 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_dd6cmmkklur5udb_" aria-expanded="false">
                                                  {"Time"}
                                                  <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                              <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                            </th>
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-risk-size) * 1px)"}}>
                                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-full select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_de6cmmkklur5udb_" aria-expanded="false">
                                                  {"Risk"}
                                                  <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                              <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                            </th>
                                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 pe-3! px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                                            <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                          </tr>
                                        </thead>
                                        <DataGridProvider>
                                        <DataGridTableBody>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="agt_refund_triage">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 14H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M10 17H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 14H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M15 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Refund Triage"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"16 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open agt_refund_triage">
                                                <span className="truncate">
                                                  {"agt_refund_triage"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"48.4K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="23% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={43.46985662931434} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"23%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$4.82"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"59.8s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-destructive-foreground text-xs transition-shadow">
                                                {"Failed"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for agt_refund_triage" aria-haspopup="menu" id="base-ui-_R_v52smmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0049" data-depth="1">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"chained run"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"4 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open RUN-0049">
                                                <span className="truncate">
                                                  {"RUN-0049"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"9.1K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="4% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={54.53249350976559} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"4%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$0.74"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"13.1s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-secondary-foreground text-xs transition-shadow">
                                                {"Clean"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-0049" aria-haspopup="menu" id="base-ui-_R_v54smmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0049_s1" data-depth="2">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                                    <span className="shrink-0 w-2" aria-hidden="true"></span>
                                                  </DataGridTableRowExpand>
                                                  <span className="shrink-0 w-5" aria-hidden="true"></span>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9.5 2V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M14.5 2V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9.5 20V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M14.5 20V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M13 9L9 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M15 13L13 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 14.5L20 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 9.5L2 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 14.5L2 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 9.5L20 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Check policy constraints"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open Step 1">
                                                <span className="truncate">
                                                  {"Step 1"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"4.0K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="font-medium tabular-nums text-foreground text-sm">
                                                  {"$0.32"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"2.2s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-secondary-foreground text-xs transition-shadow">
                                                {"Clean"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Step 1" aria-haspopup="menu" id="base-ui-_R_v56smmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0049_s2" data-depth="2">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                                    <span className="shrink-0 w-2" aria-hidden="true"></span>
                                                  </DataGridTableRowExpand>
                                                  <span className="shrink-0 w-5" aria-hidden="true"></span>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="currentColor" strokeWidth={1.5}></path>
                                                    <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                    <path d="M5.50896 18.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Call orders.read"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open Step 2">
                                                <span className="truncate">
                                                  {"Step 2"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"869"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="font-medium tabular-nums text-foreground text-sm">
                                                  {"$0.07"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"2.0s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-secondary-foreground text-xs transition-shadow">
                                                {"Clean"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Step 2" aria-haspopup="menu" id="base-ui-_R_v58smmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0049_s3" data-depth="2">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                                    <span className="shrink-0 w-2" aria-hidden="true"></span>
                                                  </DataGridTableRowExpand>
                                                  <span className="shrink-0 w-5" aria-hidden="true"></span>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9.5 2V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M14.5 2V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9.5 20V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M14.5 20V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M13 9L9 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M15 13L13 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 14.5L20 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 9.5L2 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 14.5L2 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 9.5L20 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Decide whether to escalate"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open Step 3">
                                                <span className="truncate">
                                                  {"Step 3"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"2.1K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="font-medium tabular-nums text-foreground text-sm">
                                                  {"$0.17"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"7.6s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-secondary-foreground text-xs transition-shadow">
                                                {"Clean"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Step 3" aria-haspopup="menu" id="base-ui-_R_v5asmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0049_s4" data-depth="2">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                                    <span className="shrink-0 w-2" aria-hidden="true"></span>
                                                  </DataGridTableRowExpand>
                                                  <span className="shrink-0 w-5" aria-hidden="true"></span>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="currentColor" strokeWidth={1.5}></path>
                                                    <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                    <path d="M5.50896 18.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Call payments.refund"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open Step 4">
                                                <span className="truncate">
                                                  {"Step 4"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"2.1K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="font-medium tabular-nums text-foreground text-sm">
                                                  {"$0.17"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"1.3s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-secondary-foreground text-xs transition-shadow">
                                                {"Clean"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Step 4" aria-haspopup="menu" id="base-ui-_R_v5csmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0053" data-depth="1">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"webhook run"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"4 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open RUN-0053">
                                                <span className="truncate">
                                                  {"RUN-0053"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"19.7K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="3% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={54.595448076000494} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"3%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$0.72"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"17.3s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-secondary-foreground text-xs transition-shadow">
                                                {"Clean"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-0053" aria-haspopup="menu" id="base-ui-_R_v5esmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0061" data-depth="1">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"chained run"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"4 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open RUN-0061">
                                                <span className="truncate">
                                                  {"RUN-0061"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"5.7K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="9% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={51.49520704482027} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"9%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$1.86"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"12.2s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-info-foreground text-xs transition-shadow">
                                                {"Pending"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-0061" aria-haspopup="menu" id="base-ui-_R_v5gsmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run_0043" data-depth="1">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"webhook run"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"4 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open RUN-0043">
                                                <span className="truncate">
                                                  {"RUN-0043"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"13.9K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="7% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={52.492711292576814} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"7%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$1.49"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"17.2s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-destructive-foreground text-xs transition-shadow">
                                                {"Failed"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-0043" aria-haspopup="menu" id="base-ui-_R_v5ismmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="agt_invoice_reconciler">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 14H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M10 17H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 14H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M15 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Invoice Reconciler"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"16 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open agt_invoice_reconciler">
                                                <span className="truncate">
                                                  {"agt_invoice_reconciler"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"60.5K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="18% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={46.354369728784434} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"18%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$3.76"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-warning text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"1.1m"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-destructive-foreground text-xs transition-shadow">
                                                {"Failed"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for agt_invoice_reconciler" aria-haspopup="menu" id="base-ui-_R_v5ksmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="agt_support_router">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 14H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M10 17H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 14H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M15 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Support Router"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"15 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open agt_support_router">
                                                <span className="truncate">
                                                  {"agt_support_router"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"57.9K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="32% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={38.67798298645994} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"32%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$6.59"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"50.4s"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-destructive-foreground text-xs transition-shadow">
                                                {"Failed"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for agt_support_router" aria-haspopup="menu" id="base-ui-_R_v5msmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </div>
                                            </td>
                                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                          </tr>
                                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="agt_contract_reader">
                                            <td className="align-middle first:ps-3 last:pe-3 px-3 py-2 truncate" style={{width: "calc(var(--col-node-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center min-w-0">
                                                <span className="flex items-center shrink-0">
                                                  <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                                    <button className="hover:text-foreground inline-flex items-center justify-center rounded-full size-7 text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                                      <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                      </svg>
                                                    </button>
                                                  </DataGridTableRowExpand>
                                                </span>
                                                <IconTile className="[--icon-tile-radius:min(var(--radius-xl),calc(var(--icon-tile-size)/4))] rounded-(--icon-tile-radius) text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M4 14H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M10 17H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M22 14H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M15 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M9 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                    <path d="M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                </IconTile>
                                                <div className="flex flex-col min-w-0">
                                                  <span className="flex gap-2 items-center min-w-0">
                                                    <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                                      {"Contract Reader"}
                                                    </span>
                                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                      {"16 steps"}
                                                    </Badge>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-ref-size) * 1px)"}}>
                                              <a className="focus-visible:text-foreground font-mono gap-1 group/reference hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open agt_contract_reader">
                                                <span className="truncate">
                                                  {"agt_contract_reader"}
                                                </span>
                                                <svg className="-translate-x-0.5 duration-150 group-focus-visible/reference:opacity-100 group-focus-visible/reference:translate-x-0 group-hover/reference:opacity-100 group-hover/reference:translate-x-0 opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                  <path d="M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  <path d="M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}></path>
                                                </svg>
                                              </a>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-tokens-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <span className="tabular-nums text-foreground text-sm">
                                                  {"62.3K"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-cost-size) * 1px)"}}>
                                              <div className="flex gap-2.5 items-center justify-end w-full">
                                                <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="27% of workspace spend">
                                                  <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                                    <circle className="stroke-muted" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={41.14379394929011} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                  <span className="tabular-nums text-muted-foreground text-xs">
                                                    {"27%"}
                                                  </span>
                                                </span>
                                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                                  {"$5.68"}
                                                </span>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                              <div className="flex items-center justify-end w-full">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-xs transition-shadow">
                                                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5}></circle>
                                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                                  </svg>
                                                  <span className="tabular-nums">
                                                    {"1.1m"}
                                                  </span>
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl text-destructive-foreground text-xs transition-shadow">
                                                {"Failed"}
                                              </Badge>
                                            </td>
                                            <td className="align-middle first:ps-3 last:pe-3 pe-3! px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                              <div className="flex justify-end">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for agt_contract_reader" aria-haspopup="menu" id="base-ui-_R_v5osmmkklur5udb_" aria-expanded="false">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" aria-hidden="true">
                                                    <path d="M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
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
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium ps-3 px-3 py-2 text-secondary-foreground/80">
                                              <div className="flex gap-2 items-center min-w-0">
                                                <span className="font-semibold text-foreground text-sm truncate">
                                                  {"Atlas"}
                                                </span>
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-4xl tabular-nums text-xs transition-shadow">
                                                  {"63 steps"}
                                                </Badge>
                                              </div>
                                            </td>
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                                {"$20.84"}
                                              </span>
                                            </td>
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                                {"4.0m"}
                                              </span>
                                            </td>
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium px-3 py-2 text-secondary-foreground/80"></td>
                                            <td className="align-middle bg-muted/40 dark:bg-background font-medium pe-3 px-3 py-2 text-secondary-foreground/80"></td>
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
                                <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_R_6kklur5udb_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "964.2253521126761px"}}>
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
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"00:00"}
    </span>
  </>
  )
}
