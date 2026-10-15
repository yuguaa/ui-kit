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
    <main className="bg-background flex items-start justify-center max-w-[1320px] md:p-4 min-h-svh mx-auto p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Run Queue"}
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-4">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="font-semibold text-xl tracking-tight">
                {"Run Queue"}
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
            <p className="max-w-2xl text-muted-foreground text-sm">
              {"Triage the live agent run backlog."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center min-w-0">
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                {"Runs"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"16"}
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                {"Escalated"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                {"2"}
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                {"Needs approval"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                {"1"}
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                {"Unassigned"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"0"}
              </Badge>
            </div>
          </div>
        </div>
        <div className="bg-muted/20 border-y flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-3 py-3">
          <InputGroup className="lg:max-w-sm" role="group">
            <InputGroupAddon role="group" data-align="inline-start">
              <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx={11} cy={11} r={8}></circle>
              </svg>
            </InputGroupAddon>
            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search runs..." aria-label="Search agent runs" value="" />
          </InputGroup>
          <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" data-icon="inline-start" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              {"Attention"}
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_8_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                <path d="M14 17H5"></path>
                <path d="M19 7h-9"></path>
                <circle cx={17} cy={17} r={3}></circle>
                <circle cx={7} cy={7} r={3}></circle>
              </svg>
              {"Display"}
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex={0}>
              {"Collapse groups"}
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"New run"}
            </Button>
          </div>
        </div>
        <DataGrid className="border-b">
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_9_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
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
                      <DataGridProvider>
                      <DataGridTableBody className="[&>tr:has(>td:only-child:empty)]:hidden">
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="running">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-run-row="group">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Running" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-sky-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  {"Running"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"5"}
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Throughput"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Throughput"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Latest 2m ago"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Needs approval"}
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                {"Live executions streaming steps right now"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4831" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                    <line x1={2} x2={22} y1={10} y2={10}></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Refund duplicate charge on ORD-99214 for Acme Corp"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Step 4 of 6 · Matching the second transaction in the payment ledger"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4831">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Maya Perez"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"2m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="62% of steps complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={21.488493750554184} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"62%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4831" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4830" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-send size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Draft renewal outreach for 38 Q3 accounts"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Step 2 of 5 · Pulling usage summaries for segment B"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4830">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Pavel Singh" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Pavel Singh"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"8m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="35% of steps complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={36.75663404700058} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"35%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4830" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4829" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-database size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                    <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Dedupe 412 contacts imported from the spring webinar"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Step 3 of 4 · Merging 57 confirmed duplicate pairs"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4829">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Emil Novak" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Emil Novak"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Staging"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"14m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="70% of steps complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={16.964600329384886} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"70%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4829" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4828" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                    <line x1={2} x2={22} y1={10} y2={10}></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Refund damaged item claim on ORD-99187 for Globex"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Step 5 of 6 · Waiting on finance approval for the $1,240 credit"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4828">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarFallback className="text-[9px]">
                                    {"JR"}
                                  </AvatarFallback>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Maya Perez,Jonas Reed"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"22m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="81% of steps complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={10.744246875277092} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"81%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Needs approval"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4828" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4827" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-file-text size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Summarize the Meridian master services agreement"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Step 1 of 3 · Splitting 84 pages into clause sections"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4827">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Lara Chen" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Lara Chen"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Development"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"31m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="15% of steps complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={48.06636759992384} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"15%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4827" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="waiting">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-run-row="group">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Waiting" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-muted-foreground/70 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  {"Waiting"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"4"}
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Backlog"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Backlog"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Latest 18m ago"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Retrying"}
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                {"Queued behind approvals, rate limits, or schedules"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4826" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-book-open size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Reconcile 23 June freight invoices"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Queued 18 min · Position 2 in the finance lane"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4826">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Noa Kim"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"18m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <span className="tabular-nums text-muted-foreground text-sm">
                                {"-"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4826" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4825" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-send size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Send onboarding nudges to 112 trial signups"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Step 1 of 4 · Rate limited by the email provider, retry at 13:05"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4825">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Pavel Singh" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Pavel Singh"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"26m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="10% of steps complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={50.89380098815465} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"10%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Retrying"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4825" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4824" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx={4} cy={20} r={2}></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Enrich 64 new leads from the partner webinar"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Queued 32 min · Waiting for the enrichment API window"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4824">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Pavel Singh" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Pavel Singh"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Staging"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"32m ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <span className="tabular-nums text-muted-foreground text-sm">
                                {"-"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4824" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4823" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-database size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                    <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Archive conversations older than 180 days"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Queued 1 h · Scheduled for the low traffic window at 02:00"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4823">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Emil Novak" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Emil Novak"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"1h ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <span className="tabular-nums text-muted-foreground text-sm">
                                {"-"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"On track"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4823" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="failed">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-run-row="group">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Failed" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-destructive rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  {"Failed"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"3"}
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Recovery"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Recovery"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Latest 1h ago"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Escalated"}
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                {"Stopped runs awaiting retry or escalation"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4822" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                    <line x1={2} x2={22} y1={10} y2={10}></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Refund partial return on ORD-99102 for Acme Corp"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Failed at step 3 of 6 · The processor declined the partial capture"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4822">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Maya Perez,Noa Kim"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"1h ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="48% of steps complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={29.405307237600464} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"48%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Escalated"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4822" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4821" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-book-open size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Match 9 supplier invoices to June purchase orders"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Failed at step 2 of 5 · Two invoices reference a closed PO"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4821">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Noa Kim"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"2h ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="32% of steps complete">
                              <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={38.45309407993906} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"32%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Escalated"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4821" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4820" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-file-text size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Summarize 3 renewal contracts for legal review"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Failed at step 2 of 3 · The Globex renewal PDF is password protected"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4820">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Lara Chen" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Lara Chen"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Development"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"3h ago"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="55% of steps complete">
                              <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={25.446900494077322} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"55%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Retrying"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4820" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="completed">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0" data-run-row="group">
                              <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Completed" aria-expanded="true">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <span className="bg-success rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-medium shrink-0 text-foreground text-sm truncate">
                                  {"Completed"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"4"}
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Audit"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Audit"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Latest Yesterday"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5"></td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="sr-only">
                              {"Done"}
                            </span>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="h-4 min-w-0 relative">
                              <span className="-translate-y-1/2 absolute leading-4 max-w-[calc(100vw-8rem)] pointer-events-none right-0 text-muted-foreground text-right text-sm top-1/2 truncate w-80">
                                {"Finished in the last 24 hours"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4819" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-send size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Send weekly digest to 1,847 subscribers"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Done in 4m 12s · 1,812 delivered, 35 bounced"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4819">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Pavel Singh" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Pavel Singh"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"Yesterday"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% of steps complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={0} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"100%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Done"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4819" aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4818" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-database size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                    <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Rebuild the product catalog embeddings"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Done in 18m · 3,072 vectors refreshed"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4818">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Emil Novak" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Emil Novak"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Staging"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"Yesterday"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% of steps complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={0} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"100%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Done"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4818" aria-haspopup="menu" id="base-ui-_r_2e_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4817" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx={4} cy={20} r={2}></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Score 240 inbound leads from the pricing page"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Done in 6m 40s · 31 leads routed to sales"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4817">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarFallback className="text-[9px]">
                                    {"JR"}
                                  </AvatarFallback>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Jonas Reed"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"Yesterday"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% of steps complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={0} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"100%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Done"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4817" aria-haspopup="menu" id="base-ui-_r_2j_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:has([data-run-row=group])>td]:bg-muted/45 [&:has([data-run-row=group])>td]:h-11 [&:has([data-run-row=group])>td]:hover:bg-muted/45 [&:has([data-run-row=group])>td]:shadow-none [&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 group/run-row hover:bg-muted/40" data-row-id="run-4816" data-depth="1">
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex gap-3 items-center min-w-0" data-run-row="run">
                              <Item className="[&_svg]:opacity-95 bg-background border border-border p-0 size-7 text-foreground" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-credit-card size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                    <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                    <line x1={2} x2={22} y1={10} y2={10}></line>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                <div className="font-medium leading-5 min-w-0 text-sm">
                                  <span className="flex gap-1 group/run-title items-center min-w-0">
                                    <span className="cursor-pointer hover:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Refund cancelled subscription for Globex"}
                                    </span>
                                    <svg className="-translate-x-1 group-hover/run-title:opacity-100 group-hover/run-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs truncate">
                                  {"Done in 1m 05s · $89 credited to the original card"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex items-center justify-end min-w-0">
                              <AvatarGroup className="-space-x-1" aria-label="Assigned owners for RUN-4816">
                                <Avatar className="ring-2 ring-background size-5" size="default">
                                  <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                              <span className="sr-only">
                                {"Maya Perez"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Production"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx={16} cy={16} r={6}></circle>
                                </svg>
                                <span className="tabular-nums">
                                  {"Mon"}
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center justify-end" aria-label="100% of steps complete">
                              <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={0} transform="rotate(-90 12 12)"></circle>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"100%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Done"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-4816" aria-haspopup="menu" id="base-ui-_r_2o_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      </DataGridTableBody>
                      </DataGridProvider>
                    </DataGridTable>
                    </DataGridProvider>
                  </DataGridTableViewport>
                  </DataGridProvider>
                </div>
              </div>
            </DataGridScrollArea>
            </DataGridProvider>
          </div>
        </DataGrid>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between mt-3 text-muted-foreground text-sm">
          <div className="flex flex-wrap gap-2 items-center min-w-0">
            <span className="font-medium text-foreground">
              {"Queue Mix"}
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              {"Running: 5"}
            </Badge>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              {"Waiting: 4"}
            </Badge>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              {"Failed: 3"}
            </Badge>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              {"Completed: 4"}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2 items-center min-w-0 text-xs">
            <span className="font-medium text-foreground">
              {"16 visible"}
            </span>
            <span className="text-muted-foreground">
              {"of 16 runs"}
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
              {"All runs"}
            </Badge>
          </div>
        </div>
      </section>
    </main>
  )
}
