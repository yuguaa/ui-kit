import {
  Avatar,
  AvatarBadge,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-muted flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "250px", "--sidebar-width-icon": "3rem", "--sidebar": "var(--background)", "--header-height": "56px"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="floating" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="flex-row h-(--header-height) items-center px-2.5" sidebar="header">
              <a className="flex gap-2 items-center overflow-hidden" href="#" aria-label="NeUI">
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
                <span className="font-medium group-data-[collapsible=icon]:hidden text-sm truncate">
                  {"NeUI"}
                </span>
              </a>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent sidebar="content">
              <SidebarProvider>
              <SidebarGroup className="pb-1" sidebar="group">
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <Dialog>
                  <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group/button inline-flex items-center justify-start outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="New Task" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <span className="group-data-[collapsible=icon]:hidden">
                      {"New Task"}
                    </span>
                  </DialogTrigger>
                  </Dialog>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden whitespace-nowrap" sidebar="group-label">
                  {"My Lists"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&_svg]:text-primary! bg-primary/10! font-medium hover:bg-primary/15! text-primary" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                          <path d="M13 5h8"></path>
                          <path d="M13 12h8"></path>
                          <path d="M13 19h8"></path>
                          <path d="m3 17 2 2 4-4"></path>
                          <path d="m3 7 2 2 4-4"></path>
                        </svg>
                        <span className="truncate">
                          {"All Tasks"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 group-data-[collapsible=icon]:hidden h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                          {"42"}
                        </Badge>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="hover:bg-primary/5!" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span className="truncate">
                          {"Today"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 group-data-[collapsible=icon]:hidden h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                          {"6"}
                        </Badge>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="hover:bg-primary/5!" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                        <span className="truncate">
                          {"Upcoming"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 group-data-[collapsible=icon]:hidden h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                          {"14"}
                        </Badge>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="hover:bg-primary/5!" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                          <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                        </svg>
                        <span className="truncate">
                          {"Priority"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 group-data-[collapsible=icon]:hidden h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                          {"4"}
                        </Badge>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="hover:bg-primary/5!" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="truncate">
                          {"Completed"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 group-data-[collapsible=icon]:hidden h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                          {"18"}
                        </Badge>
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
                <SidebarGroupLabel sidebar="group-label">
                  {"Tags"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent className="overflow-hidden" sidebar="group-content">
                  <div className="flex flex-wrap gap-1.5 pt-1 px-2 shrink-0 w-[calc(var(--sidebar-width)-2rem)]">
                    <Button className="font-normal gap-1.5" type="button" tabIndex={0}>
                      <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Work"}
                    </Button>
                    <Button className="font-normal gap-1.5" type="button" tabIndex={0}>
                      <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Personal"}
                    </Button>
                    <Button className="font-normal gap-1.5" type="button" tabIndex={0}>
                      <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Team"}
                    </Button>
                    <Button className="font-normal gap-1.5" type="button" tabIndex={0}>
                      <span className="bg-blue-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Goals"}
                    </Button>
                    <Button className="font-normal gap-1.5" type="button" tabIndex={0}>
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      {"Add Tag"}
                    </Button>
                  </div>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-3" sidebar="footer">
              <SidebarProvider>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden p-0" sidebar="group">
                <div className="bg-muted/40 border border-dashed p-3 rounded-xl space-y-2.5">
                  <div className="flex font-medium items-center justify-between text-muted-foreground text-xs">
                    <span className="whitespace-nowrap">
                      {"Focus Progress"}
                    </span>
                    <span className="tabular-nums text-foreground whitespace-nowrap">
                      {"18 / 32"}
                    </span>
                  </div>
                  <Progress className="h-1.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="56" aria-valuetext="56%" role="progressbar" aria-label="Focus progress">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "56%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      {"x"}
                    </span>
                  </Progress>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-foreground text-sm whitespace-nowrap">
                      {"Launch Campaign"}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {"Next milestone in 3 days"}
                    </p>
                  </div>
                </div>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarMenu sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-lg cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group/menu-button items-center outline-hidden overflow-hidden peer/menu-button w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open user menu" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                    <Avatar className="size-7" size="default">
                      <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      <AvatarBadge className="-end-0.5 -top-0.5 bg-success bottom-auto ring-background size-2"></AvatarBadge>
                    </Avatar>
                    <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight text-left">
                      <span className="font-semibold text-sm truncate">
                        {"Mira Stone"}
                      </span>
                      <span className="text-muted-foreground text-xs truncate">
                        {"mira@neui.io"}
                      </span>
                    </div>
                    <svg className="group-data-[collapsible=icon]:hidden lucide lucide-chevrons-up-down ml-auto opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
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
      <SidebarInset className="bg-background border m-2 md:ml-0 min-h-0 overflow-hidden rounded-lg shadow-xs">
        <header className="border-b flex gap-2 items-center md:hidden px-3 py-2.5 shrink-0">
          <SidebarProvider>
          <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
            <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
              <rect width={18} height={18} x={3} y={3} rx={2}></rect>
              <path d="M9 3v18"></path>
            </svg>
            <span className="sr-only">
              {"Toggle Sidebar"}
            </span>
          </SidebarTrigger>
          </SidebarProvider>
          <a className="flex gap-2 items-center" href="#" aria-label="NeUI">
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
            <span className="font-medium text-sm">
              {"NeUI"}
            </span>
          </a>
          <Button className="ml-auto" type="button" tabIndex={0} aria-label="Open AI assistant">
            <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              <path d="M20 2v4"></path>
              <path d="M22 4h-4"></path>
              <circle cx={4} cy={20} r={2}></circle>
            </svg>
          </Button>
        </header>
        <div className="flex flex-1 flex-col min-h-0">
          <div className="border-b flex gap-3 h-(--header-height) items-center justify-between px-4 sm:px-6">
            <div className="flex gap-2 items-center min-w-0">
              <SidebarProvider>
              <SidebarTrigger className="-ms-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hidden items-center justify-center md:inline-flex outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
                <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
              <h1 className="font-semibold text-base">
                {"All Tasks"}
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="hidden relative sm:block">
                <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-4 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
                <Input className="h-8 lg:w-56 pl-8 w-44" id="base-ui-_r_i_" placeholder="Search tasks" aria-label="Search tasks" type="search"></Input>
                <Kbd className="-translate-y-1/2 absolute right-2 top-1/2">
                  {"⌘K"}
                </Kbd>
              </div>
              <Button className="gap-1.5 hidden md:inline-flex" type="button" tabIndex={0} aria-pressed="true">
                <svg className="lucide lucide-sparkles size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx={4} cy={20} r={2}></circle>
                </svg>
                {"Assistant"}
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 min-h-0 overflow-y-auto p-4 sm:p-6">
            <div className="gap-4 grid sm:grid-cols-3">
              <div className="aspect-video bg-muted/40 border border-border/60 border-dashed rounded-xl"></div>
              <div className="aspect-video bg-muted/40 border border-border/60 border-dashed rounded-xl"></div>
              <div className="aspect-video bg-muted/40 border border-border/60 border-dashed rounded-xl"></div>
            </div>
            <div className="bg-muted/40 border border-border/60 border-dashed flex-1 min-h-64 rounded-xl"></div>
          </div>
        </div>
      </SidebarInset>
      <div className="duration-300 ease-in-out h-svh overflow-hidden shrink-0 transition-[width] w-[320px]" role="complementary" aria-label="AI assistant" aria-hidden="false">
        <div className="bg-background border flex flex-col h-[calc(100%-1rem)] me-2 my-2 overflow-hidden rounded-lg shadow-xs w-[312px]">
          <div className="flex flex-col h-full w-full">
            <div className="flex gap-2 h-(--header-height) items-center justify-between px-4 shrink-0">
              <div className="flex gap-2 items-center">
                <span className="bg-primary/10 flex items-center justify-center rounded-md size-6 text-primary">
                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx={4} cy={20} r={2}></circle>
                  </svg>
                </span>
                <h2 className="font-medium text-sm">
                  {"AI Assistant"}
                </h2>
              </div>
              <Button type="button" tabIndex={0} aria-label="Close AI assistant">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-1 flex-col gap-4 min-h-0 overflow-y-auto px-4 py-4">
              <div className="flex gap-2.5 items-start">
                <span className="bg-primary/10 flex items-center justify-center rounded-md shrink-0 size-6 text-primary">
                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx={4} cy={20} r={2}></circle>
                  </svg>
                </span>
                <p className="bg-muted leading-snug max-w-[80%] px-3 py-2 rounded-lg rounded-tl-sm text-foreground text-sm">
                  {"Morning, Mira. You have 6 tasks due today and 3 are high priority."}
                </p>
              </div>
              <div className="flex gap-2.5 items-start justify-end">
                <p className="bg-primary leading-snug max-w-[80%] px-3 py-2 rounded-lg rounded-tr-sm text-primary-foreground text-sm">
                  {"What should I tackle first?"}
                </p>
                <Avatar className="size-6" size="default">
                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="bg-primary/10 flex items-center justify-center rounded-md shrink-0 size-6 text-primary">
                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx={4} cy={20} r={2}></circle>
                  </svg>
                </span>
                <p className="bg-muted leading-snug max-w-[80%] px-3 py-2 rounded-lg rounded-tl-sm text-foreground text-sm">
                  {"Start with the launch announcement copy - it blocks two other tasks and is due at 2:00 PM."}
                </p>
              </div>
              <div className="pt-1 space-y-2">
                <p className="text-muted-foreground text-xs">
                  {"Suggested"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button className="font-normal rounded-full" type="button" tabIndex={0}>
                    {"Summarize my day"}
                  </Button>
                  <Button className="font-normal rounded-full" type="button" tabIndex={0}>
                    {"Plan the week"}
                  </Button>
                  <Button className="font-normal rounded-full" type="button" tabIndex={0}>
                    {"Surface blockers"}
                  </Button>
                </div>
              </div>
            </div>
            <form className="p-3 shrink-0">
              <div className="relative">
                <Textarea className="pr-11 resize-none" rows={2} placeholder="Ask anything about your tasks..." aria-label="Message the AI assistant"></Textarea>
                <Button className="absolute bottom-2 right-2" type="submit" disabled="" tabIndex={0} disabled aria-label="Send message">
                  <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </SidebarProvider>
  )
}
