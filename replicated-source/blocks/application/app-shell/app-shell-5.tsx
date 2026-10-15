import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Card } from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "350px", "--sidebar-width-icon": "3rem", "--header-height": "50px"}}>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <div className="*:data-[sidebar=sidebar]:flex-row data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex overflow-hidden transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <div className="flex flex-1 min-h-full">
              <Sidebar className="border-r w-(--sidebar-width-icon)!">
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
                <SidebarContent sidebar="content">
                  <SidebarGroup sidebar="group">
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarMenu className="gap-0.5" sidebar="menu">
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                            <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                            <span className="absolute bg-primary right-0.5 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="justify-center!" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                              <path d="m21 21-4.34-4.34"></path>
                              <circle cx="11" cy="11" r="8"></circle>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter sidebar="footer">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                    <Avatar className="size-6" size="default">
                      <AvatarImage alt="Nick Bold" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </Sidebar>
              <div className="flex flex-1 overflow-hidden w-[calc(var(--sidebar-width)-var(--sidebar-width-icon))]">
                <div className="bg-background flex flex-1 flex-col overflow-hidden">
                  <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                    <span className="font-semibold text-foreground text-sm">
                      Calendars
                    </span>
                    <Button type="button" tabIndex="0" aria-label="Add calendar">
                      <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </div>
                  <div className="border-b border-border flex flex-col items-center px-1 py-2 shrink-0">
                    <div className="flex items-center justify-between pb-1 px-2 w-full">
                      <span className="font-medium text-foreground text-sm">
                        June 2026
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
                              June 2026
                            </span>
                          </div>
                          <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="June 2026">
                            <thead aria-hidden="true">
                              <tr className="flex rdp-weekdays">
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Sunday" scope="col">
                                  Su
                                </th>
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Monday" scope="col">
                                  Mo
                                </th>
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Tuesday" scope="col">
                                  Tu
                                </th>
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Wednesday" scope="col">
                                  We
                                </th>
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Thursday" scope="col">
                                  Th
                                </th>
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Friday" scope="col">
                                  Fr
                                </th>
                                <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Saturday" scope="col">
                                  Sa
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rdp-weeks">
                              <tr className="flex mt-2 rdp-week w-full">
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-05-31" data-month="2026-05" data-outside="true">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/5/31" aria-label="Sunday, May 31st, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    31
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-01">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/1" aria-label="Monday, June 1st, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    1
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-02">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/2" aria-label="Tuesday, June 2nd, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    2
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-03">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/3" aria-label="Wednesday, June 3rd, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    3
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-04">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/4" aria-label="Thursday, June 4th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    4
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-05">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/5" aria-label="Friday, June 5th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    5
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-06">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/6" aria-label="Saturday, June 6th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    6
                                  </Button>
                                </td>
                              </tr>
                              <tr className="flex mt-2 rdp-week w-full">
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-07">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/7" aria-label="Sunday, June 7th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    7
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-08">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/8" aria-label="Monday, June 8th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    8
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-09">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/9" aria-label="Tuesday, June 9th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    9
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" aria-selected="true" data-day="2026-06-10" data-selected="true">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="0" day="2026/6/10" selectedSingle="true" aria-label="Wednesday, June 10th, 2026, selected">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    10
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-11">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/11" aria-label="Thursday, June 11th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    11
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-12">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/12" aria-label="Friday, June 12th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    12
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-13">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/13" aria-label="Saturday, June 13th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    13
                                  </Button>
                                </td>
                              </tr>
                              <tr className="flex mt-2 rdp-week w-full">
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-14">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/14" aria-label="Sunday, June 14th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    14
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-15">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/15" aria-label="Monday, June 15th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    15
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-16">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/16" aria-label="Tuesday, June 16th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    16
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-17">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/17" aria-label="Wednesday, June 17th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    17
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-18">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/18" aria-label="Thursday, June 18th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    18
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-19">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/19" aria-label="Friday, June 19th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    19
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-20">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/20" aria-label="Saturday, June 20th, 2026">
                                    <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                    20
                                  </Button>
                                </td>
                              </tr>
                              <tr className="flex mt-2 rdp-week w-full">
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-21">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/21" aria-label="Sunday, June 21st, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    21
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-22">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/22" aria-label="Monday, June 22nd, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    22
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-23">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/23" aria-label="Tuesday, June 23rd, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    23
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-24">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/24" aria-label="Wednesday, June 24th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    24
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-25">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/25" aria-label="Thursday, June 25th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    25
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-26">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/26" aria-label="Friday, June 26th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    26
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-27">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/27" aria-label="Saturday, June 27th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    27
                                  </Button>
                                </td>
                              </tr>
                              <tr className="flex mt-2 rdp-week w-full">
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-28">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/28" aria-label="Sunday, June 28th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    28
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-29">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/29" aria-label="Monday, June 29th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    29
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-30">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    30
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-01" data-month="2026-07" data-outside="true">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    1
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-02" data-month="2026-07" data-outside="true">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    2
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-03" data-month="2026-07" data-outside="true">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    3
                                  </Button>
                                </td>
                                <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-04" data-month="2026-07" data-outside="true">
                                  <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/4" aria-label="Saturday, July 4th, 2026">
                                    <span className="size-1" aria-hidden="true"></span>
                                    4
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
                    <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                      <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_f_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "334px"}} data-has-overflow-y="" data-overflow-y-end="">
                        <div className="flex flex-col h-full">
                          <div className="border-b border-border py-2">
                            <div className="px-3 py-1">
                              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                My Calendars
                              </span>
                            </div>
                            <div className="px-2" role="list">
                              <div role="listitem">
                                <Collapsible data-open="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-start outline-none px-1.5 select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for nick@company.io" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_g_" aria-expanded="true">
                                    <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="truncate">
                                      nick@company.io
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                      3
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                  <CollapsibleContent data-open="" id="base-ui-_r_g_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                    <div className="py-0.5">
                                      <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                        <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="true" aria-label="Toggle Work">
                                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                        </Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        <span className="flex-1 font-medium text-foreground text-sm truncate">
                                          Work
                                        </span>
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-hover:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Work" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
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
                                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="true" aria-label="Toggle Personal">
                                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                        </Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        <span className="flex-1 font-medium text-foreground text-sm truncate">
                                          Personal
                                        </span>
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-hover:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Personal" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
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
                                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_11_" aria-checked="true" aria-label="Toggle Meetings">
                                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                        </Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        <span className="flex-1 font-medium text-foreground text-sm truncate">
                                          Meetings
                                        </span>
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-hover:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Meetings" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
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
                                      nick@gmail.com
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                      2
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
                                Add account
                              </Button>
                            </div>
                          </div>
                          <div className="border-b border-border py-2">
                            <div className="flex items-center justify-between px-3 py-1">
                              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                Up Next
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                3
                              </Badge>
                            </div>
                            <div className="flex flex-col gap-0.5 px-1.5" role="list">
                              <div role="listitem">
                                <Button className="gap-2.5 h-auto items-start px-3 py-2 text-left w-full" type="button" tabIndex="0">
                                  <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                                  <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                    <span className="font-medium leading-snug text-foreground text-sm truncate">
                                      Weekly Team Standup
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      9:00 AM to 9:30 AM
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
                                      Design Review · Component Library v3
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      11:00 AM to 12:00 PM
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
                                      Coffee with Alex
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      2:00 PM to 2:30 PM
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
                              New Event
                            </Button>
                            <Button className="justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                              <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                              </svg>
                              Share Availability
                            </Button>
                          </div>
                          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          <div className="flex gap-2 items-center px-3 py-2.5">
                            <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                            <div className="flex flex-col">
                              <span className="font-medium text-[11px] text-muted-foreground/60">
                                Your timezone
                              </span>
                              <span className="text-muted-foreground text-xs">
                                GMT+5 (+05:00) · Asia/Tashkent
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_f_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "116.35225375626044px"}}>
                        <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                      </div>
                    </ScrollArea>
                  </div>
                </div>
                <div className="bg-background flex-1 flex-col hidden overflow-hidden">
                  <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                    <span className="font-semibold text-foreground text-sm">
                      Schedule
                    </span>
                    <Button type="button" tabIndex="0" aria-label="Filter schedule">
                      <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                        <path d="M14 17H5"></path>
                        <path d="M19 7h-9"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                    </Button>
                  </div>
                  <div className="grow max-h-full min-h-0">
                    <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1a_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                        <div className="flex flex-col">
                          <div>
                            <div className="py-3">
                              <div className="pb-2 px-3">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  Today
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 px-3" role="list">
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Morning Standup"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Morning Standup
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          9:00 AM to 9:15 AM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span className="truncate">
                                        Zoom · Room A
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="MR" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="TB" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          3 attendees
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Sprint Planning"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Sprint Planning
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          10:00 AM to 11:00 AM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span className="truncate">
                                        Conf Room B
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="JP" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          2 attendees
                                        </span>
                                      </div>
                                      <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                        <svg className="lucide lucide-paperclip size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                          <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                        </svg>
                                        1 file
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Lunch with Sarah"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Lunch with Sarah
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          12:30 PM to 1:30 PM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                        Personal
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span className="truncate">
                                        The Coffee House, 3rd Ave
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          1 attendee
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Code Review Session"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(22, 163, 74)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Code Review Session
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          3:00 PM to 4:00 PM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="MR" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="JP" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          2 attendees
                                        </span>
                                      </div>
                                      <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                        <svg className="lucide lucide-paperclip size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                          <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                        </svg>
                                        2 files
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            <div className="py-3">
                              <div className="pb-2 px-3">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  Tomorrow
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 px-3" role="list">
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Client Presentation"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Client Presentation
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          9:30 AM to 10:30 AM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span className="truncate">
                                        Google Meet
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="DK" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          2 attendees
                                        </span>
                                      </div>
                                      <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                        <svg className="lucide lucide-paperclip size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                          <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                        </svg>
                                        1 file
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Design Sync"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Design Sync
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          2:00 PM to 2:45 PM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="AP" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="LM" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          2 attendees
                                        </span>
                                      </div>
                                      <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                        <svg className="lucide lucide-paperclip size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                          <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                        </svg>
                                        1 file
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            <div className="py-3">
                              <div className="pb-2 px-3">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  This Week
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 px-3" role="list">
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="Team Retrospective"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            Team Retrospective
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          11:00 AM to 12:00 PM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span className="truncate">
                                        Conf Room A
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="MR" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="TB" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          3 attendees
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="border border-border/80 flex flex-col gap-3 group hover:bg-muted/60 px-3 py-2 relative rounded-md text-left transition-colors w-full">
                                    <button className="absolute cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md z-10" type="button" aria-label="1:1 with Manager"></button>
                                    <div className="flex gap-2.5 items-start">
                                      <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <div className="flex gap-1 items-center">
                                          <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(22, 163, 74)"}}></div>
                                          <h3 className="font-medium leading-snug text-sm truncate">
                                            1:1 with Manager
                                          </h3>
                                        </div>
                                        <span className="text-muted-foreground text-xs">
                                          4:00 PM to 4:30 PM
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                        Meeting
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span className="truncate">
                                        Zoom
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                      <div className="flex gap-1.5 items-center">
                                        <AvatarGroup className="-space-x-1">
                                          <Avatar className="border border-background size-5" size="default">
                                            <AvatarImage alt="DK" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </AvatarGroup>
                                        <span className="text-muted-foreground text-xs">
                                          1 attendee
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                  <div className="border-border border-t px-3 py-2.5">
                    <Button className="gap-2 justify-start w-full" type="button" tabIndex="0">
                      <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      New Event
                    </Button>
                  </div>
                </div>
                <div className="bg-background flex-1 flex-col hidden overflow-hidden">
                  <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                    <span className="font-semibold text-foreground text-sm">
                      Contacts
                    </span>
                    <Button type="button" tabIndex="0" aria-label="Add contact">
                      <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" x2="19" y1="8" y2="14"></line>
                        <line x1="22" x2="16" y1="11" y2="11"></line>
                      </svg>
                    </Button>
                  </div>
                  <div className="border-b border-border px-3 py-2">
                    <div className="relative">
                      <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-3.5 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <Input className="h-8 pl-8 text-sm" id="base-ui-_r_1b_" placeholder="Search contacts..." aria-label="Search contacts" value=""></Input>
                    </div>
                  </div>
                  <div className="grow max-h-full min-h-0">
                    <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1c_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                        <div className="flex flex-col gap-0 px-1.5 py-2">
                          <div role="group" aria-labelledby="contact-group-design">
                            <div className="px-3 py-1.5">
                              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="contact-group-design">
                                Design
                              </span>
                            </div>
                            <div role="list">
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Sarah Chen is online"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Sarah Chen
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      Design Lead
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Sarah Chen" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with Sarah Chen" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Aisha Patel" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Aisha Patel is online"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Aisha Patel
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      UX Researcher
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Aisha Patel" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with Aisha Patel" id="base-ui-_r_1k_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div role="group" aria-labelledby="contact-group-engineering">
                            <div className="px-3 py-1.5">
                              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="contact-group-engineering">
                                Engineering
                              </span>
                            </div>
                            <div role="list">
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Luna Martinez" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-amber-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Luna Martinez is away"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Luna Martinez
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      QA Engineer
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Luna Martinez" id="base-ui-_r_1m_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with Luna Martinez" id="base-ui-_r_1o_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Marcus Rivera" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Marcus Rivera is online"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Marcus Rivera
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      Frontend Engineer
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Marcus Rivera" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with Marcus Rivera" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="James Park" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-muted-foreground/40 border-2 border-background rounded-full size-2.5" role="img" aria-label="James Park is offline"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      James Park
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      Backend Engineer
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message James Park" id="base-ui-_r_1u_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with James Park" id="base-ui-_r_20_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Tom Bradley" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Tom Bradley is online"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Tom Bradley
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      DevOps Engineer
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Tom Bradley" id="base-ui-_r_22_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with Tom Bradley" id="base-ui-_r_24_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div role="group" aria-labelledby="contact-group-management">
                            <div className="px-3 py-1.5">
                              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="contact-group-management">
                                Management
                              </span>
                            </div>
                            <div role="list">
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Emily Watson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-amber-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Emily Watson is away"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Emily Watson
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      Product Manager
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Emily Watson" id="base-ui-_r_26_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with Emily Watson" id="base-ui-_r_28_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                              <div role="listitem">
                                <div className="flex gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="David Kim" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -right-0.5 absolute bg-muted-foreground/40 border-2 border-background rounded-full size-2.5" role="img" aria-label="David Kim is offline"></span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      David Kim
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      Engineering Manager
                                    </span>
                                  </div>
                                  <div className="flex gap-0.5 items-center shrink-0">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message David Kim" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Schedule meeting with David Kim" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarPlusIcon" tabler="IconCalendarPlus" hugeicons="CalendarAdd01Icon" phosphor="CalendarPlusIcon" remixicon="RiCalendarEventLine" aria-hidden="true">
                                        <path d="M16 19h6"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M19 16v6"></path>
                                        <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                                        <path d="M3 10h18"></path>
                                        <path d="M8 2v4"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                  <div className="border-border border-t flex h-10 items-center justify-between px-3 text-xs">
                    <span>
                      8 contacts
                    </span>
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-emerald-500 rounded-full size-2 text-muted-foreground" aria-hidden="true"></span>
                      4 online
                    </span>
                  </div>
                </div>
                <div className="bg-background flex-1 flex-col hidden overflow-hidden">
                  <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold text-foreground text-sm">
                        Notifications
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-primary-foreground transition-shadow">
                        3
                      </Badge>
                    </div>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Mark all as read" id="base-ui-_r_2e_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckCheckIcon" tabler="IconChecks" hugeicons="Tick01Icon" phosphor="ChecksIcon" remixicon="RiCheckDoubleLine" aria-hidden="true">
                        <path d="M18 6 7 17l-5-5"></path>
                        <path d="m22 10-7.5 7.5L13 16"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <div className="grow max-h-full min-h-0">
                    <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2f_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                        <div role="list">
                          <div role="listitem">
                            <div className="relative">
                              <div className="flex gap-2.5 items-start p-3 text-left w-full">
                                <div className="relative shrink-0">
                                  <Avatar size="sm">
                                    <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="-right-0.5 -top-0.5 absolute bg-primary pointer-events-none ring-1 ring-background rounded-full size-2 z-10" aria-hidden="true"></span>
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex gap-2 items-start justify-between">
                                    <p className="leading-snug text-foreground text-sm">
                                      <span className="font-medium text-primary">
                                        Sarah Chen
                                      </span>
                                      invited you to
                                    </p>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                      New
                                    </Badge>
                                  </div>
                                  <p className="line-clamp-2 text-muted-foreground text-xs">
                                    Q2 Planning · Friday 10:00 to 11:00 AM
                                  </p>
                                  <div className="bg-muted/50 border border-border/50 gap-1.5 inline-flex items-center mt-1 px-2 py-1 rounded-sm text-[11px] text-muted-foreground">
                                    <svg className="lucide lucide-calendar opacity-60 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="font-medium text-foreground">
                                      Fri, Mar 7
                                    </span>
                                    <span className="opacity-70">
                                      10:00 to 11:00 AM
                                    </span>
                                  </div>
                                  <div className="flex gap-1 items-center py-1">
                                    <Button type="button" tabIndex="0">
                                      Accept
                                    </Button>
                                    <Button type="button" tabIndex="0">
                                      Decline
                                    </Button>
                                  </div>
                                  <div className="flex gap-2 items-center pt-0.5">
                                    <p className="text-[11px] text-muted-foreground">
                                      5 min ago
                                    </p>
                                    <span className="border border-border/60 font-medium h-[18px] inline-flex items-center overflow-hidden rounded-sm shrink-0 text-[10px]">
                                      <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground">
                                        Location
                                      </span>
                                      <span className="flex h-full items-center leading-none px-1.5 text-foreground">
                                        Google Meet
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Separator className="opacity-50" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <div role="listitem">
                            <div className="relative">
                              <Button className="border-none h-auto hover:bg-muted items-start justify-start p-3 rounded-none shadow-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                                <div className="relative shrink-0">
                                  <div className="[&_svg]:size-4 flex items-center justify-center size-6 text-warning">
                                    <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                    </svg>
                                  </div>
                                  <span className="-right-0.5 -top-0.5 absolute bg-primary pointer-events-none ring-1 ring-background rounded-full size-2 z-10" aria-hidden="true"></span>
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex gap-2 items-start justify-between">
                                    <p className="leading-snug text-foreground text-sm">
                                      <span className="font-medium">
                                        Sprint Planning starts in 15 minutes
                                      </span>
                                    </p>
                                  </div>
                                  <p className="line-clamp-2 text-muted-foreground text-xs">
                                    Make sure you have reviewed the backlog items before joining.
                                  </p>
                                  <AvatarGroup className="-space-x-1 mt-1.5">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="JP" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="TB" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <AvatarGroupCount className="leading-none size-5 text-[9px]">
                                      +2
                                    </AvatarGroupCount>
                                  </AvatarGroup>
                                  <div className="bg-muted/50 border border-border/50 gap-1.5 inline-flex items-center mt-1 px-2 py-1 rounded-sm text-[11px] text-muted-foreground">
                                    <svg className="lucide lucide-calendar opacity-60 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="font-medium text-foreground">
                                      Today
                                    </span>
                                    <span className="opacity-70">
                                      10:00 to 11:00 AM
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center pt-0.5">
                                    <p className="text-[11px] text-muted-foreground">
                                      15 min ago
                                    </p>
                                    <span className="border border-border/60 font-medium h-[18px] inline-flex items-center overflow-hidden rounded-sm shrink-0 text-[10px]">
                                      <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground">
                                        Room
                                      </span>
                                      <span className="flex h-full items-center leading-none px-1.5 text-foreground">
                                        Conf B
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </Button>
                            </div>
                            <Separator className="opacity-50" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <div role="listitem">
                            <div className="relative">
                              <div className="flex gap-2.5 items-start p-3 text-left w-full">
                                <div className="relative shrink-0">
                                  <Avatar size="sm">
                                    <AvatarImage alt="MR" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="-right-0.5 -top-0.5 absolute bg-primary pointer-events-none ring-1 ring-background rounded-full size-2 z-10" aria-hidden="true"></span>
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex gap-2 items-start justify-between">
                                    <p className="leading-snug text-foreground text-sm">
                                      <span className="font-medium text-primary">
                                        Marcus Rivera
                                      </span>
                                      moved
                                    </p>
                                  </div>
                                  <p className="line-clamp-2 text-muted-foreground text-xs">
                                    Design Sync rescheduled to 3:00 PM tomorrow
                                  </p>
                                  <div className="flex gap-1 items-center py-1">
                                    <Button type="button" tabIndex="0">
                                      View event
                                    </Button>
                                  </div>
                                  <div className="flex gap-2 items-center pt-0.5">
                                    <p className="text-[11px] text-muted-foreground">
                                      1 hour ago
                                    </p>
                                    <span className="border border-border/60 font-medium h-[18px] inline-flex items-center overflow-hidden rounded-sm shrink-0 text-[10px]">
                                      <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground">
                                        Change
                                      </span>
                                      <span className="flex h-full items-center leading-none px-1.5 text-warning">
                                        +1 day
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Separator className="opacity-50" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <div role="listitem">
                            <div className="relative">
                              <Button className="border-none h-auto hover:bg-muted items-start justify-start p-3 rounded-none shadow-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                                <div className="relative shrink-0">
                                  <Avatar size="sm">
                                    <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex gap-2 items-start justify-between">
                                    <p className="leading-snug text-foreground text-sm">
                                      <span className="font-medium text-primary">
                                        Emily Watson
                                      </span>
                                      accepted your invite to
                                    </p>
                                  </div>
                                  <p className="line-clamp-2 text-muted-foreground text-xs">
                                    Team Lunch
                                  </p>
                                  <div className="flex gap-2 items-center pt-0.5">
                                    <p className="text-[11px] text-muted-foreground">
                                      2 hours ago
                                    </p>
                                    <span className="border border-border/60 font-medium h-[18px] inline-flex items-center overflow-hidden rounded-sm shrink-0 text-[10px]">
                                      <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground">
                                        RSVP
                                      </span>
                                      <span className="flex h-full items-center leading-none px-1.5 text-success">
                                        Going
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </Button>
                            </div>
                            <Separator className="opacity-50" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <div role="listitem">
                            <div className="relative">
                              <Button className="border-none h-auto hover:bg-muted items-start justify-start p-3 rounded-none shadow-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                                <div className="relative shrink-0">
                                  <Avatar size="sm">
                                    <AvatarImage alt="DK" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex gap-2 items-start justify-between">
                                    <p className="leading-snug text-foreground text-sm">
                                      <span className="font-medium text-primary">
                                        David Kim
                                      </span>
                                      cancelled
                                    </p>
                                  </div>
                                  <p className="line-clamp-2 text-muted-foreground text-xs">
                                    Friday Demo has been removed from the calendar
                                  </p>
                                  <div className="flex gap-2 items-center pt-0.5">
                                    <p className="text-[11px] text-muted-foreground">
                                      3 hours ago
                                    </p>
                                    <span className="border border-border/60 font-medium h-[18px] inline-flex items-center overflow-hidden rounded-sm shrink-0 text-[10px]">
                                      <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground">
                                        Status
                                      </span>
                                      <span className="flex h-full items-center leading-none px-1.5 text-destructive">
                                        Cancelled
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </Button>
                            </div>
                            <Separator className="opacity-50" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <div role="listitem">
                            <div className="relative">
                              <div className="flex gap-2.5 items-start p-3 text-left w-full">
                                <div className="relative shrink-0">
                                  <Avatar size="sm">
                                    <AvatarImage alt="AP" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex gap-2 items-start justify-between">
                                    <p className="leading-snug text-foreground text-sm">
                                      <span className="font-medium text-primary">
                                        Aisha Patel
                                      </span>
                                      invited you to
                                    </p>
                                  </div>
                                  <p className="line-clamp-2 text-muted-foreground text-xs">
                                    UX Review · Next Monday 2:00 PM
                                  </p>
                                  <div className="bg-muted/50 border border-border/50 gap-1.5 inline-flex items-center mt-1 px-2 py-1 rounded-sm text-[11px] text-muted-foreground">
                                    <svg className="lucide lucide-calendar opacity-60 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="font-medium text-foreground">
                                      Mon, Mar 10
                                    </span>
                                    <span className="opacity-70">
                                      2:00 to 3:00 PM
                                    </span>
                                  </div>
                                  <div className="flex gap-1 items-center py-1">
                                    <ButtonGroup role="group">
                                      <Button type="button" tabIndex="0">
                                        <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                          <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                        </svg>
                                        ux-review-agenda.pdf
                                        <span className="opacity-60">
                                          (84 KB)
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
                                  <div className="flex gap-1 items-center py-1">
                                    <Button type="button" tabIndex="0">
                                      Accept
                                    </Button>
                                    <Button type="button" tabIndex="0">
                                      Maybe
                                    </Button>
                                  </div>
                                  <div className="flex gap-2 items-center pt-0.5">
                                    <p className="text-[11px] text-muted-foreground">
                                      Yesterday
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                  <div className="border-border border-t p-2">
                    <Button className="text-muted-foreground w-full" type="button" tabIndex="0">
                      View all notifications
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
              <span className="flex flex-col items-center">
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
              </span>
              <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                Collapse
              </span>
            </button>
          </div>
        </div>
      </Sidebar>
      <SidebarInset>
        <header className="border-b border-border flex gap-2 h-(--header-height) items-center min-w-0 px-4 py-1.5 sm:gap-3">
          <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
            <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
            </svg>
            <span className="sr-only">
              Toggle Sidebar
            </span>
          </SidebarTrigger>
          <h1 className="font-semibold sm:text-lg text-base text-foreground whitespace-nowrap">
            June 2026
          </h1>
          <div className="-space-x-1.5 hidden items-center md:flex">
            <span className="border-2 border-background rounded-full size-3.5" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
            <span className="border-2 border-background rounded-full size-3.5" aria-hidden="true" style={{backgroundColor: "rgb(22, 163, 74)"}}></span>
            <span className="border-2 border-background rounded-full size-3.5" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
            <span className="border-2 border-background rounded-full size-3.5" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
          </div>
          <div className="flex gap-2 items-center ml-auto">
            <div className="gap-0 hidden items-center sm:flex">
              <Button type="button" tabIndex="0" aria-label="Previous period">
                <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </Button>
              <Button type="button" tabIndex="0" aria-label="Next period">
                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </div>
            <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
              Today
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Calendar view: Week" aria-haspopup="menu" id="base-ui-_r_2l_" aria-expanded="false">
              Week
              <svg className="lucide lucide-chevron-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button className="gap-1.5 hidden lg:inline-flex" type="button" tabIndex="0">
              <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New Event
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="auto-rows-min gap-4 grid md:grid-cols-3">
            <Card className="aspect-video bg-muted/20 border-border/70 border-dashed shadow-none" size="default"></Card>
            <Card className="aspect-video bg-muted/20 border-border/70 border-dashed shadow-none" size="default"></Card>
            <Card className="aspect-video bg-muted/20 border-border/70 border-dashed shadow-none" size="default"></Card>
          </div>
          <Card className="bg-muted/20 border-border/70 border-dashed flex-1 md:min-h-min min-h-screen shadow-none" size="default"></Card>
        </div>
      </SidebarInset>
    </div>
  )
}
