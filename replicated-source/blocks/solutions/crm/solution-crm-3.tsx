import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  FilterChip,
  Filters,
} from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        CRM contacts directory
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-balance text-sm">
              Contacts
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-pretty text-xs">
              <span>
                11 contacts
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                11 accounts
              </span>
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
            Add Contact
          </Button>
        </header>
        <FramePanel className="p-0 shadow-none">
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <Filters>
              <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Name contains no value" ruleId="name-1" tabIndex="0" index="0">
                  <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Name">
                    <svg className="lucide lucide-user size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="flex items-center">
                      <span>
                        Name
                      </span>
                    </span>
                  </div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false">
                    contains
                  </PopoverTrigger>
                  </Popover>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search contacts..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                    Search contacts...
                  </PopoverTrigger>
                  </Popover>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Name filter options" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </FilterChip>
              </div>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                Filters
              </PopoverTrigger>
              </Popover>
              <div className="sr-only" aria-live="polite" role="status">
                <span></span>
              </div>
            </Filters>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-funnel-x size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FunnelXIcon" tabler="IconFilterOff" hugeicons="FilterRemoveIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilterOffLine" aria-hidden="true">
                <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                <path d="m16.5 3.5 5 5"></path>
                <path d="m21.5 3.5-5 5"></path>
              </svg>
              Clear
            </Button>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_d_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "40px"}} />
                        <col style={{width: "220px"}} />
                        <col style={{width: "180px"}} />
                        <col style={{width: "160px"}} />
                        <col style={{width: "130px"}} />
                        <col style={{width: "150px"}} />
                        <col style={{width: "110px"}} />
                        <col style={{width: "60px"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "40px"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_e_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "220px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Name
                                <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="company" data-header-id="company" data-header-depth="0" style={{width: "180px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Account
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "160px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Owner
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lifecycle" data-header-id="lifecycle" data-header-depth="0" style={{width: "130px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Lifecycle
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="lastActivity" data-header-id="lastActivity" data-header-depth="0" style={{width: "150px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                              Last Activity
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="openDeals" data-header-id="openDeals" data-header-depth="0" style={{width: "110px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Open Deals
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "60px"}}></th>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="7">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Aisha Bello
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="aisha.bello@atlasfreight.com">
                                  aisha.bello@atlasfreight.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <defs>
                                      <lineargradient id="_r_k_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                                        <stop offset=".00006%" stopColor="#0845BF"></stop>
                                        <stop offset="19.11%" stopColor="#0950DE"></stop>
                                        <stop offset="38.23%" stopColor="#0B59F6"></stop>
                                        <stop offset="50%" stopColor="#0B5CFF"></stop>
                                        <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                                        <stop offset="77.74%" stopColor="#1665FC"></stop>
                                        <stop offset="86.33%" stopColor="#246FF9"></stop>
                                        <stop offset="93.88%" stopColor="#387FF4"></stop>
                                        <stop offset="100%" stopColor="#4F90EE"></stop>
                                      </lineargradient>
                                    </defs>
                                    <path fill="url(#_r_k_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                    <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Atlas Freight
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Sana Qureshi
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Customer
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-headphones shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                4 hours ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $38K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                1 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Aisha Bello" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="10">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Ben Travers
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="ben.travers@ridgelineenergy.com">
                                  ben.travers@ridgelineenergy.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                                    <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                    <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                                    <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                                    <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                                    <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                    <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                                    <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                                    <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                                    <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Ridgeline Energy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Sarah Chen
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                              Opportunity
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-calendar shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                Yesterday
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $67K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                1 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ben Travers" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="9">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_14_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Carla Ferreira
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="carla.f@quantadevices.com">
                                  carla.f@quantadevices.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 256 310" preserveAspectRatio="xMidYMid">
                                    <path d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Quanta Devices
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Alex Johnson
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full! shrink-0 size-1.5"></span>
                              MQL
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-mail shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                2 days ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="text-muted-foreground text-sm">
                              No deals
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Carla Ferreira" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1d_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  David Okafor
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="d.okafor@vertexhealth.io">
                                  d.okafor@vertexhealth.io
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 256 228">
                                    <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                                    <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                                    <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                                    <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                                    <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Vertex Health
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Alex Johnson
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full! shrink-0 size-1.5"></span>
                              MQL
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-mail shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                5 days ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="text-muted-foreground text-sm">
                              No deals
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for David Okafor" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1m_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Elena Sokolova
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="elena.s@cobaltlogistics.com">
                                  elena.s@cobaltlogistics.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="none" aria-hidden="true" focusable="false" viewBox="0 0 128 128">
                                    <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                                    <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Cobalt Logistics
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Sana Qureshi
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-violet-500 rounded-full! shrink-0 size-1.5"></span>
                              SQL
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-headphones shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                3 days ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $28K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                1 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Elena Sokolova" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="5">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1v_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Hana Kim
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="hana.kim@meridianretail.com">
                                  hana.kim@meridianretail.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="none" aria-hidden="true" focusable="false" viewBox="100 100 312 312">
                                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Meridian Retail
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Mira Stone
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                              Opportunity
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-calendar shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                1 day ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $56K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                2 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Hana Kim" aria-haspopup="menu" id="base-ui-_r_25_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_28_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Marcus Hale
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="marcus.hale@apexmfg.com">
                                  marcus.hale@apexmfg.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="#008fe2" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                                    <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Apex Manufacturing
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Leo Grant
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Customer
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-calendar shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                Yesterday
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $42K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                1 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Marcus Hale" aria-haspopup="menu" id="base-ui-_r_2e_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2h_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Priya Raman
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="priya.raman@brightwave.media">
                                  priya.raman@brightwave.media
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 2447.6 2452.5">
                                    <g clipRule="evenodd" fillRule="evenodd">
                                      <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                      <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                      <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                      <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                    </g>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Brightwave Media
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Mira Stone
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                              Opportunity
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-sparkles shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                2 hours ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $84K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                2 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Priya Raman" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="8">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2q_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Ryan Mercer
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="ryan.mercer@orbitsoftware.dev">
                                  ryan.mercer@orbitsoftware.dev
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                    <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Orbit Software
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Leo Grant
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-violet-500 rounded-full! shrink-0 size-1.5"></span>
                              SQL
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-sparkles shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                6 hours ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                $31K
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                1 open
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ryan Mercer" aria-haspopup="menu" id="base-ui-_r_30_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="11">
                          <td className="align-middle px-2 py-1.5">
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_33_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Sofia Marchetti
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="sofia.m@summitfinancial.com">
                                  sofia.m@summitfinancial.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="p-0 size-7 text-foreground" variant="outline" size="xs">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                    <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Summit Financial
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Nora Vale
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full! shrink-0 size-1.5"></span>
                              Lead
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1.5 items-center">
                              <svg className="lucide lucide-file-text shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                              <span className="text-muted-foreground text-sm">
                                9 days ago
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="text-muted-foreground text-sm">
                              No deals
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Sofia Marchetti" aria-haspopup="menu" id="base-ui-_r_39_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                      </DataGridTableBody>
                    </DataGridTable>
                  </DataGridTableViewport>
                </div>
              </div>
            </DataGridScrollArea>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  Rows per page
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_3c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    10
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_3c_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  1 - 10 of 11
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                    <span className="sr-only">
                      Go to previous page
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                    1
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                    2
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                    <span className="sr-only">
                      Go to next page
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </DataGridPagination>
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
