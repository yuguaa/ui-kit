import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Grouped task data grid
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-4">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="font-semibold text-xl tracking-tight">
                Roadmap Queue
              </h2>
            </div>
            <p className="max-w-2xl text-muted-foreground text-sm">
              Track work by stage, owner, and signal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center min-w-0">
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                Tasks
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                19
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                Blocked
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                3
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                At risk
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                3
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                Unassigned
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                2
              </Badge>
            </div>
          </div>
        </div>
        <div className="bg-muted/20 border-y flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-3 py-3">
          <InputGroup className="lg:max-w-sm" role="group">
            <InputGroupAddon role="group" data-align="inline-start">
              <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </InputGroupAddon>
            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search roadmap..." aria-label="Search roadmap tasks" value="" />
          </InputGroup>
          <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" data-icon="inline-start" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              Signals
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_8_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                <path d="M14 17H5"></path>
                <path d="M19 7h-9"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
              Display
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex="0">
              Collapse groups
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New task
            </Button>
          </div>
        </div>
        <DataGrid className="border-b">
          <div className="relative">
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_9_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "300px"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "96px"}} />
                        <col style={{width: "92px"}} />
                        <col style={{width: "84px"}} />
                        <col style={{width: "80px"}} />
                        <col style={{width: "60px"}} />
                      </colgroup>
                      <DataGridTableBody className="[&>tr:has(>td:only-child:empty)]:hidden">
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="backlog">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-roadmap-row="category">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Backlog" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-muted-foreground/70 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  Backlog
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  6
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Discovery
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Discovery
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Next 14 Jan
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Blocked
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                Ideas waiting for product shaping
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-184" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx="4" cy="20" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Draft first-run board tips">
                                      Draft first-run board tips
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-184">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noor Albright" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Rina Holt,Noor Albright
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Adoption
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  22 Dec
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="18% complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="46.36990756698535" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                18%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Queued
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-184" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-197" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                    <line x1="2" x2="22" y1="10" y2="10"></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Map invoice retries to health cards">
                                      Map invoice retries to health cards
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-197">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Vale Aksoy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Vale Aksoy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Revenue
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  03 Mar
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="34% complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="37.32212072464674" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                34%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                At risk
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-197" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-205" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-book-open size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Guard archived pages">
                                      Guard archived pages
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-205">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noor Albright" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Noor Albright
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Knowledge
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  18 Aug
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="12% complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="49.762827632862326" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                12%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Queued
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-205" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-212" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-bot size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                    <path d="M12 8V4H8"></path>
                                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                    <path d="M2 14h2"></path>
                                    <path d="M20 14h2"></path>
                                    <path d="M15 13v2"></path>
                                    <path d="M9 13v2"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Audit assistant fallback prompts for unsupported intents">
                                      Audit assistant fallback prompts for unsupported intents
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-212">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Sora Min" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Sora Min,Rina Holt
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                AI Quality
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  29 Nov
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="42% complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="32.79822730347744" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                42%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                On track
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-212" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-226" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-shield-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Scope vendor admin roles">
                                      Scope vendor admin roles
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-226">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Sora Min" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Evren Blake,Sora Min
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Access
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  14 Jan
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="9% complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="51.459287665800815" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                9%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Blocked
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-226" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-239" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-bell size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Define regional quiet hours for digest notifications">
                                      Define regional quiet hours for digest notifications
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <Avatar className="size-5" size="default">
                                <AvatarFallback className="font-medium text-[9px]">
                                  --
                                </AvatarFallback>
                              </Avatar>
                              <span className="sr-only">
                                Unassigned owner
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Messaging
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  11 Feb
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <span className="tabular-nums text-muted-foreground text-sm">
                                -
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Queued
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-239" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="todo">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-roadmap-row="category">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse To Do" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-yellow-500 dark:bg-yellow-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  To Do
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  5
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Ready
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Ready
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Next 27 Apr
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Blocked
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                Scoped work ready for owners
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-241" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Prototype mobile composer">
                                      Prototype mobile composer
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-241">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Mina Rowe" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Mina Rowe
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Mobile
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  27 Apr
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="46% complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="30.536280592892787" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                46%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                On track
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-241" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-244" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                    <line x1="2" x2="22" y1="10" y2="10"></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Connect revenue alerts to renewals">
                                      Connect revenue alerts to renewals
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-244">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Vale Aksoy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Vale Aksoy,Rina Holt
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Revenue
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  14 Oct
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="58% complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="23.750440461138837" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                58%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                At risk
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-244" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-251" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-book-open size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Write handoff checklist for knowledge base imports">
                                      Write handoff checklist for knowledge base imports
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-251">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noor Albright" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Noor Albright,Evren Blake
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Workflow
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  30 Sep
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="37% complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="35.625660691708255" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                37%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Queued
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-251" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-263" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-shield-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Separate SSO exception review from the access queue">
                                      Separate SSO exception review from the access queue
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-263">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Sora Min" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Vale Aksoy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Evren Blake,Sora Min,Vale Aksoy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Access
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  08 May
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="29% complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="40.14955411287755" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                29%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Blocked
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-263" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-279" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-bell size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Preview announcement routing">
                                      Preview announcement routing
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-279">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Rina Holt
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Messaging
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  21 Jul
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="51% complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="27.708847204661975" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                51%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                On track
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-279" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="in-progress">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-roadmap-row="category">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse In Progress" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-sky-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  In Progress
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  5
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Delivery
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Delivery
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Next 03 Apr
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Blocked
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                Active delivery with review signals
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-286" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-bot size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                    <path d="M12 8V4H8"></path>
                                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                    <path d="M2 14h2"></path>
                                    <path d="M20 14h2"></path>
                                    <path d="M15 13v2"></path>
                                    <path d="M9 13v2"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Tune citation scoring for generated release notes">
                                      Tune citation scoring for generated release notes
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-286">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Sora Min" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noor Albright" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Sora Min,Noor Albright
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                AI Quality
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  19 Dec
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="76% complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="13.571680263507908" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                76%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                On track
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-286" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-292" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx="4" cy="20" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Ship onboarding status badges">
                                      Ship onboarding status badges
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-292">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Mina Rowe" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Rina Holt,Mina Rowe
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Adoption
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  25 Aug
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="88% complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="6.78584013175395" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                88%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                On track
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-292" aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-301" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Review swipe-to-archive recovery">
                                      Review swipe-to-archive recovery
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-301">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Mina Rowe" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Mina Rowe,Evren Blake
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Mobile
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  02 Nov
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="67% complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="18.66106036232337" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                67%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                At risk
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-301" aria-haspopup="menu" id="base-ui-_r_2e_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-318" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-database size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Show warehouse lag in ops dashboards">
                                      Show warehouse lag in ops dashboards
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <Avatar className="size-5" size="default">
                                <AvatarFallback className="font-medium text-[9px]">
                                  --
                                </AvatarFallback>
                              </Avatar>
                              <span className="sr-only">
                                Unassigned owner
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-invert rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Insights
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  06 Jun
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="41% complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="33.3637139811236" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                41%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Blocked
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-318" aria-haspopup="menu" id="base-ui-_r_2j_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-324" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-bell size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Clarify webhook retry copy">
                                      Clarify webhook retry copy
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-324">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Vale Aksoy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Vale Aksoy,Rina Holt
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Reliability
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  03 Apr
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="82% complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="10.178760197630929" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                82%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                On track
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-324" aria-haspopup="menu" id="base-ui-_r_2o_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="done">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-roadmap-row="category">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Done" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-success rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  Done
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  3
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Shipped
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Shipped
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Next 18 Mar
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              Done
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                Recently shipped and verified work
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-331" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                    <line x1="2" x2="22" y1="10" y2="10"></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Publish renewal alert audit trail">
                                      Publish renewal alert audit trail
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-331">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Vale Aksoy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Vale Aksoy,Rina Holt
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Revenue
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  18 Mar
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="0" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                100%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Done
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-331" aria-haspopup="menu" id="base-ui-_r_2t_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-338" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-book-open size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Launch knowledge import validator">
                                      Launch knowledge import validator
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-338">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noor Albright" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Noor Albright,Evren Blake
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Knowledge
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  26 Mar
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="0" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                100%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Done
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-338" aria-haspopup="menu" id="base-ui-_r_32_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-roadmap-row=category])>td]:bg-muted/45 [&:has([data-roadmap-row=category])>td]:h-11 [&:has([data-roadmap-row=category])>td]:hover:bg-muted/45 [&:has([data-roadmap-row=category])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-9 data-[state=selected]:bg-muted/50 group/roadmap-row hover:bg-muted/40" data-row-id="task-346" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0 ps-8" data-roadmap-row="task">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/task-title items-center max-w-full min-w-0">
                                    <span className="cursor-pointer flex-1 hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate" title="Release mobile undo affordance">
                                      Release mobile undo affordance
                                    </span>
                                    <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-[transform,opacity]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RDM-346">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Mina Rowe" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Sora Min" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                Mina Rowe,Sora Min
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                Mobile
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                <span className="tabular-nums">
                                  12 Apr
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="0" transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                100%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Done
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for RDM-346" aria-haspopup="menu" id="base-ui-_r_37_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      </DataGridTableBody>
                    </DataGridTable>
                  </DataGridTableViewport>
                </div>
              </div>
            </DataGridScrollArea>
          </div>
        </DataGrid>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between mt-3 text-muted-foreground text-sm">
          <div className="flex flex-wrap gap-2 items-center min-w-0">
            <span className="font-medium text-foreground">
              Stage Mix
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              Backlog: 6
            </Badge>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              To Do: 5
            </Badge>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              In Progress: 5
            </Badge>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              Done: 3
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2 items-center min-w-0 text-xs">
            <span className="font-medium text-foreground">
              19 visible
            </span>
            <span className="text-muted-foreground">
              of 19 tasks
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
              All tasks
            </Badge>
          </div>
        </div>
      </section>
    </main>
  )
}
