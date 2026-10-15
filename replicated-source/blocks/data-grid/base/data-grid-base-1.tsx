import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
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
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Customer CRM data grid
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-balance text-sm" id="page-heading">
              Customers
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              12 of 12 customers
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
            Add customer
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="px-4 py-3">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-48 sm:w-48" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search customers..." aria-label="Search customers" value="" />
                </InputGroup>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by customer status" baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  Status
                </PopoverTrigger>
                </Popover>
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Table actions" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
                Actions
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_9_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport style={{width: "calc(1206px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridTable style={{"--header-id-size": "35", "--col-id-size": "35", "--header-name-size": "361", "--col-name-size": "361", "--header-company-size": "150", "--col-company-size": "150", "--header-role-size": "160", "--col-role-size": "160", "--header-location-size": "160", "--col-location-size": "160", "--header-balance-size": "180", "--col-balance-size": "180", "--header-status-size": "110", "--col-status-size": "110", "--header-actions-size": "50", "--col-actions-size": "50", width: "calc(1206px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-name-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-company-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-role-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-location-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-balance-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="id" data-header-id="id" data-header-depth="0" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_a_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "calc(var(--header-name-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                                Customer
                                <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="company" data-header-id="company" data-header-depth="0" style={{width: "calc(var(--header-company-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                Company
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="role" data-header-id="role" data-header-depth="0" style={{width: "calc(var(--header-role-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                Role
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="location" data-header-id="location" data-header-depth="0" style={{width: "calc(var(--header-location-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                Location
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="balance" data-header-id="balance" data-header-depth="0" style={{width: "calc(var(--header-balance-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                Balance ($)
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                Status
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="1">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1b_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Alex Johnson
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="alex@anthropic.com">
                                  alex@anthropic.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-1 items-center min-w-0">
                              <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <span className="dark:hidden" aria-hidden="true">
                                    <svg className="size-4" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                      <title>
                                        Anthropic
                                      </title>
                                      <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                                    </svg>
                                  </span>
                                  <span className="dark:block hidden" aria-hidden="true">
                                    <svg className="size-4" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                      <title>
                                        Anthropic
                                      </title>
                                      <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                                    </svg>
                                  </span>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Anthropic
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium line-clamp-1 text-foreground">
                                CEO
                              </span>
                              <span className="line-clamp-1 text-muted-foreground text-xs">
                                Executive
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                <span className="font-medium line-clamp-1 text-foreground">
                                  United States
                                </span>
                              </div>
                              <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                PST (UTC−8)
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-balance-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center">
                                <span className="font-medium tabular-nums text-foreground">
                                  $5,143.03
                                </span>
                              </div>
                              <div className="flex gap-1 items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-arrow-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                                <span>
                                  5.2%
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              Active
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="6">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-yellow-400 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Aron Thompson
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="aron@supabase.com">
                                  aron@supabase.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-1 items-center min-w-0">
                              <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" aria-hidden="true" viewBox="0 0 109 113" fill="none">
                                    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                                    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                                    <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                                    <defs>
                                      <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#249361"></stop>
                                        <stop offset="1" stopColor="#3ECF8E"></stop>
                                      </lineargradient>
                                      <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                        <stop></stop>
                                        <stop offset="1" stopOpacity="0"></stop>
                                      </lineargradient>
                                    </defs>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Supabase
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium line-clamp-1 text-foreground">
                                Director
                              </span>
                              <span className="line-clamp-1 text-muted-foreground text-xs">
                                GTM
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/my.svg" />
                                <span className="font-medium line-clamp-1 text-foreground">
                                  Malaysia
                                </span>
                              </div>
                              <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                MYT (UTC+8)
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-balance-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center">
                                <span className="font-medium tabular-nums text-foreground">
                                  $6,214.22
                                </span>
                              </div>
                              <div className="flex gap-1 items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-arrow-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                                <span>
                                  1.2%
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              Pending
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="5">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1t_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  David Kim
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="david@stripe.com">
                                  david@stripe.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-1 items-center min-w-0">
                              <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Stripe
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium line-clamp-1 text-foreground">
                                Lawyer
                              </span>
                              <span className="line-clamp-1 text-muted-foreground text-xs">
                                Legal · Counsel
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/de.svg" />
                                <span className="font-medium line-clamp-1 text-foreground">
                                  Germany
                                </span>
                              </div>
                              <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                CET (UTC+1)
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-balance-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center">
                                <span className="font-medium tabular-nums text-foreground">
                                  $9,876.54
                                </span>
                              </div>
                              <div className="flex gap-1 items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-arrow-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                                <span>
                                  12.7%
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              Active
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="4">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_26_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-gray-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Emma Wilson
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="emma@convex.dev">
                                  emma@convex.dev
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-1 items-center min-w-0">
                              <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" aria-hidden="true" viewBox="28 28 128 132" fill="none">
                                    <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                                    <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                                    <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Convex
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium line-clamp-1 text-foreground">
                                Developer
                              </span>
                              <span className="line-clamp-1 text-muted-foreground text-xs">
                                Platform · IC3
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/au.svg" />
                                <span className="font-medium line-clamp-1 text-foreground">
                                  Australia
                                </span>
                              </div>
                              <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                AEDT (UTC+11)
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-balance-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center">
                                <span className="font-medium tabular-nums text-foreground">
                                  $3,456.45
                                </span>
                              </div>
                              <div className="flex gap-1 items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-arrow-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                                <span>
                                  0.8%
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Inactive
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_2c_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="7">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2f_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-red-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  James Brown
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="james@mintlify.com">
                                  james@mintlify.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-1 items-center min-w-0">
                              <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-4" aria-hidden="true" viewBox="0 0 19 19" fill="none">
                                    <path d="M18.367 7.28888V1.59755C18.367 0.986819 17.8715 0.5 17.2699 0.5H11.5812C10.6877 0.5 9.80295 0.677018 8.98017 1.01336C8.15738 1.35856 7.40539 1.85424 6.77724 2.49152L6.733 2.53578C5.90137 3.37664 5.30862 4.42108 5.00781 5.57174C5.54749 5.43012 6.10483 5.35931 6.6622 5.35046C8.14852 5.33276 9.60831 5.81073 10.7938 6.7047C11.8643 7.50131 12.6783 8.59885 13.1206 9.86458C13.5807 11.148 13.6337 12.5465 13.2887 13.8653C14.43 13.5644 15.4828 12.9714 16.3233 12.1393L16.3675 12.0951C16.9957 11.4667 17.4999 10.7143 17.845 9.89114C18.19 9.06797 18.3581 8.18285 18.3581 7.28888H18.367Z" fill="#18E299"></path>
                                    <path d="M4.83793 7.193C4.84674 5.44706 5.54303 3.77167 6.76814 2.51953L2.03511 7.25472C2.01749 7.27236 1.99985 7.28117 1.98222 7.29881C0.827615 8.44513 0.131342 9.97945 0.0167623 11.6019C-0.0890033 13.1186 0.307609 14.6176 1.15373 15.8698C1.23444 15.9892 1.45343 16.0285 1.57682 15.9139L4.47656 13.0216C5.38438 12.1134 5.66643 10.7642 5.23455 9.55618C4.96132 8.80666 4.82912 8.00424 4.83793 7.193Z" fill="#0C8C5E"></path>
                                    <path d="M16.341 12.0938C15.4332 12.9844 14.2962 13.6016 13.0623 13.875C11.8195 14.1483 10.5327 14.0689 9.33405 13.6457C9.33405 13.6457 9.32522 13.6457 9.31641 13.6457C8.10892 13.2136 6.76042 13.4958 5.8526 14.3952L2.95282 17.2875C2.82943 17.4109 2.84706 17.6137 2.99689 17.7107C4.24845 18.5484 5.74683 18.954 7.26281 18.8482C8.88455 18.7336 10.4093 18.037 11.5639 16.8818L11.608 16.8378L16.341 12.1026V12.0938Z" fill="#0C8C5E"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Mintlify
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium line-clamp-1 text-foreground">
                                Product Manager
                              </span>
                              <span className="line-clamp-1 text-muted-foreground text-xs">
                                Product
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/es.svg" />
                                <span className="font-medium line-clamp-1 text-foreground">
                                  Spain
                                </span>
                              </div>
                              <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                CET (UTC+1)
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-balance-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex gap-1.5 items-center">
                                <span className="font-medium tabular-nums text-foreground">
                                  $5,321.77
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-destructive/90 inline-flex rounded-sm shrink-0 text-destructive" type="button" aria-label="Reversal $79.99. Refund · annual plan proration" id="base-ui-_r_2j_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-circle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertCircleIcon" tabler="IconAlertCircle" hugeicons="AlertCircleIcon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" x2="12" y1="8" y2="12"></line>
                                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                              <div className="flex gap-1 items-center tabular-nums text-destructive text-xs">
                                <svg className="lucide lucide-arrow-down shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                  <path d="M12 5v14"></path>
                                  <path d="m19 12-7 7-7-7"></path>
                                </svg>
                                <span>
                                  0.4%
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Inactive
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                      </DataGridTableBody>
                    </DataGridTable>
                  </DataGridTableViewport>
                </div>
              </div>
            </DataGridScrollArea>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <DataGridPagination>
            <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
              <div className="text-muted-foreground text-sm">
                Rows per page
              </div>
              <Select>
              <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_2q_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                <SelectValue>
                  5
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_2q_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
              <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                1 - 5 of 12
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
                <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                  3
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
      </Frame>
    </main>
  )
}
