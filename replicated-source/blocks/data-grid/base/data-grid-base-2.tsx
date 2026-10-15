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
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
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
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/bases/base/ui/progress"
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
        CRM contacts data grid
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-balance text-sm" id="page-heading">
              Contacts
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              22 CRM pipeline
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
            Add contact
          </Button>
        </header>
        <FramePanel className="p-0 shadow-none">
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
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
                  <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                    Search...
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
            <div className="flex flex-wrap gap-2 items-center">
              <ButtonGroup role="group">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-pin-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PinOffIcon" tabler="IconPinnedOff" hugeicons="PinOffIcon" phosphor="PushPinSlashIcon" remixicon="RiUnpinLine" aria-hidden="true">
                    <path d="M12 17v5"></path>
                    <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"></path>
                    <path d="m2 2 20 20"></path>
                    <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"></path>
                  </svg>
                  Unpin all
                </Button>
                <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center px-3 text-muted-foreground text-sm">
                  2 contacts pinned
                </div>
              </ButtonGroup>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-funnel-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FunnelXIcon" tabler="IconFilterOff" hugeicons="FilterRemoveIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilterOffLine" aria-hidden="true">
                  <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                  <path d="m16.5 3.5 5 5"></path>
                  <path d="m21.5 3.5-5 5"></path>
                </svg>
                Clear
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Table actions" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
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
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_i_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport style={{width: "calc(1206px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridTable style={{"--header-pin-size": "40", "--col-pin-size": "40", "--header-name-size": "270", "--col-name-size": "270", "--header-company-size": "140", "--col-company-size": "140", "--header-tags-size": "220", "--col-tags-size": "220", "--header-score-size": "148", "--col-score-size": "148", "--header-stock-size": "108", "--col-stock-size": "108", "--header-revenue-size": "110", "--col-revenue-size": "110", "--header-status-size": "110", "--col-status-size": "110", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1206px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-pin-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-name-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-company-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-tags-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-score-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-stock-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-revenue-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="pin" data-header-id="pin" data-header-depth="0" style={{width: "calc(var(--header-pin-size) * 1px)"}}></th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "calc(var(--header-name-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                Contact
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
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
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
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="tags" data-header-id="tags" data-header-depth="0" style={{width: "calc(var(--header-tags-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                Category
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="score" data-header-id="score" data-header-depth="0" style={{width: "calc(var(--header-score-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                Score
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="stock" data-header-id="stock" data-header-depth="0" style={{width: "calc(var(--header-stock-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                Stock
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="revenue" data-header-id="revenue" data-header-depth="0" style={{width: "calc(var(--header-revenue-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                Amount
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
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b bg-muted/30 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/50" data-row-id="1" data-row-pinned="top">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-pin-size) * 1px)"}}>
                            <button className="hover:text-primary/80 inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-primary transition-colors" type="button" aria-label="Unpin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M16 2l4.585 4.586-2.122 2.121L17.05 7.293l-3.535 3.536 1.413 5.658-2.12 2.121-4.244-4.243L4.322 18.6l-1.414-1.41 4.242-4.244-4.243-4.243 2.122-2.121 5.656 1.414 3.536-3.536-1.414-1.414z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Theresa Webb
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="theresa@stripe.com">
                                  theresa@stripe.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Stripe
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-100 border-0 border-transparent dark:bg-amber-950/50 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-amber-800 text-xs transition-shadow">
                                E-commerce
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-100 border-0 border-transparent dark:bg-rose-950/50 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-rose-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar" aria-labelledby="base-ui-_r_1m_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1m_" role="presentation">
                                Lead score
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                92%
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                x
                              </span>
                            </Progress>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stock-size) * 1px)"}}>
                            <svg className="shrink-0" width="92" height="26" viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-red-400 stroke-red-600" d="M 2 16.666666666666664 C 3.173333333333333 18.133333333333333 5.52 22.53333333333333 7.866666666666666 24 C 10.213333333333333 25.46666666666667 11.386666666666667 24.733333333333334 13.733333333333333 24 C 16.08 23.266666666666666 17.25333333333333 23.26666666666667 19.599999999999998 20.333333333333336 C 21.946666666666665 17.400000000000002 23.119999999999997 13 25.466666666666665 9.333333333333332 C 27.813333333333333 5.666666666666665 28.986666666666665 2.7333333333333343 31.333333333333332 2 C 33.68 1.2666666666666666 34.85333333333333 3.466666666666666 37.199999999999996 5.666666666666666 C 39.54666666666666 7.866666666666666 40.72 10.066666666666666 43.06666666666666 13 C 45.41333333333333 15.933333333333334 46.58666666666666 18.133333333333336 48.93333333333333 20.333333333333336 C 51.279999999999994 22.533333333333335 52.45333333333333 24.733333333333334 54.8 24 C 57.14666666666666 23.266666666666666 58.32 18.133333333333333 60.666666666666664 16.666666666666664 C 63.01333333333333 15.199999999999998 64.18666666666667 18.13333333333333 66.53333333333333 16.666666666666664 C 68.88 15.199999999999998 70.05333333333333 11.533333333333331 72.39999999999999 9.333333333333332 C 74.74666666666666 7.133333333333333 75.92 5.666666666666666 78.26666666666667 5.666666666666666 C 80.61333333333333 5.666666666666666 81.78666666666666 6.399999999999998 84.13333333333333 9.333333333333332 C 86.47999999999999 12.266666666666666 88.82666666666667 18.133333333333336 90 20.333333333333336" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-revenue-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              $48,500.00
                            </span>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Active
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:shadow-[0_2px_0_rgba(0,0,0,0.03)] bg-muted/30 dark:[&>td]:shadow-[0_2px_0_rgba(255,255,255,0.06)] data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/50" data-row-id="2" data-row-pinned="top" data-row-pinned-boundary="top">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-pin-size) * 1px)"}}>
                            <button className="hover:text-primary/80 inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-primary transition-colors" type="button" aria-label="Unpin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M16 2l4.585 4.586-2.122 2.121L17.05 7.293l-3.535 3.536 1.413 5.658-2.12 2.121-4.244-4.243L4.322 18.6l-1.414-1.41 4.242-4.244-4.243-4.243 2.122-2.121 5.656 1.414 3.536-3.536-1.414-1.414z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-yellow-400 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Cameron Williamson
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="cameron@mintlify.com">
                                  cameron@mintlify.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 19 19" fill="none">
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
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border-0 border-transparent dark:bg-emerald-950/50 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-emerald-800 text-xs transition-shadow">
                                P2P
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                AI
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                Developer tools
                              </Badge>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="93" aria-valuetext="93%" role="progressbar" aria-labelledby="base-ui-_r_1t_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1t_" role="presentation">
                                Lead score
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                93%
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "93%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                x
                              </span>
                            </Progress>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stock-size) * 1px)"}}>
                            <svg className="shrink-0" width="92" height="26" viewBox="0 0 92 26" aria-hidden="true">
                              <path className="stroke-muted-foreground" d="M 2 24 C 3.1733333333333333 24 5.52 24 7.866666666666666 24 C 10.213333333333333 24 11.386666666666667 27.3 13.733333333333333 24 C 16.08 20.7 17.25333333333333 11.9 19.599999999999998 7.5 C 21.946666666666665 3.0999999999999996 23.119999999999997 3.1000000000000005 25.466666666666665 2 C 27.813333333333333 0.8999999999999999 28.986666666666665 -1.2999999999999998 31.333333333333332 2 C 33.68 5.3 34.853333333333325 14.100000000000001 37.199999999999996 18.5 C 39.54666666666666 22.9 40.72 22.9 43.06666666666666 24 C 45.41333333333333 25.1 46.586666666666666 25.1 48.93333333333333 24 C 51.279999999999994 22.9 52.45333333333333 20.7 54.8 18.5 C 57.14666666666666 16.3 58.32 15.200000000000001 60.666666666666664 13 C 63.01333333333333 10.8 64.18666666666667 8.6 66.53333333333333 7.5 C 68.88 6.4 70.05333333333333 7.5 72.39999999999999 7.5 C 74.74666666666666 7.5 75.92 4.2 78.26666666666667 7.5 C 80.61333333333333 10.8 81.78666666666666 20.7 84.13333333333333 24 C 86.47999999999999 27.3 88.82666666666667 24 90 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-revenue-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              $62,300.00
                            </span>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Active
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_21_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="19">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-pin-size) * 1px)"}}>
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="17" x2="12" y2="22"></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Annette Black
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="annette@slack.com">
                                  annette@slack.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
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
                                Slack
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-yellow-100 border-0 border-transparent dark:bg-yellow-950/50 dark:text-yellow-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs text-yellow-800 transition-shadow">
                                Automation
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                Digital
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-100 border-0 border-transparent dark:bg-rose-950/50 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-rose-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-labelledby="base-ui-_r_24_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_24_" role="presentation">
                                Lead score
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                81%
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "81%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                x
                              </span>
                            </Progress>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stock-size) * 1px)"}}>
                            <svg className="shrink-0" width="92" height="26" viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-red-400 stroke-red-600" d="M 2 2 C 3.1733333333333333 2 5.52 -1.2999999999999998 7.866666666666666 2 C 10.213333333333333 5.3 11.386666666666663 14.100000000000001 13.733333333333333 18.5 C 16.08 22.9 17.25333333333333 22.9 19.599999999999998 24 C 21.946666666666665 25.1 23.119999999999997 25.1 25.466666666666665 24 C 27.813333333333333 22.9 28.986666666666668 20.700000000000003 31.333333333333332 18.5 C 33.68 16.3 34.85333333333333 15.200000000000001 37.199999999999996 13 C 39.54666666666666 10.8 40.72 8.600000000000001 43.06666666666666 7.5 C 45.41333333333333 6.4 46.586666666666666 7.5 48.93333333333333 7.5 C 51.279999999999994 7.5 52.45333333333333 4.2 54.8 7.5 C 57.14666666666666 10.8 58.32 20.7 60.666666666666664 24 C 63.01333333333333 27.3 64.18666666666667 25.1 66.53333333333333 24 C 68.88 22.9 70.05333333333333 21.8 72.39999999999999 18.5 C 74.74666666666666 15.2 75.92 8.600000000000001 78.26666666666667 7.5 C 80.61333333333333 6.4 81.78666666666666 13 84.13333333333333 13 C 86.47999999999999 13 88.82666666666667 8.6 90 7.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-revenue-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              $67,800.00
                            </span>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Active
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_28_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="13">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-pin-size) * 1px)"}}>
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="17" x2="12" y2="22"></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Bessie Cooper
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="bessie@modelcontextprotocol.io">
                                  bessie@modelcontextprotocol.io
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <span className="dark:hidden" aria-hidden="true">
                                    <svg className="size-5" fill="#000000" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                      <title>
                                        ModelContextProtocol
                                      </title>
                                      <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z"></path>
                                      <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z"></path>
                                    </svg>
                                  </span>
                                  <span className="dark:block hidden" aria-hidden="true">
                                    <svg className="size-5" fill="#ffffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                      <title>
                                        ModelContextProtocol
                                      </title>
                                      <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z"></path>
                                      <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z"></path>
                                    </svg>
                                  </span>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Model Context Protocol
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                AI
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-100 border-0 border-transparent dark:bg-amber-950/50 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-amber-800 text-xs transition-shadow">
                                E-commerce
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                Developer tools
                              </Badge>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="84" aria-valuetext="84%" role="progressbar" aria-labelledby="base-ui-_r_2b_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2b_" role="presentation">
                                Lead score
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                84%
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "84%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                x
                              </span>
                            </Progress>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stock-size) * 1px)"}}>
                            <svg className="shrink-0" width="92" height="26" viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 18.5 C 3.173333333333333 19.6 5.52 22.9 7.866666666666666 24 C 10.213333333333333 25.1 11.386666666666667 25.650000000000002 13.733333333333333 24 C 16.08 22.35 17.25333333333333 19.05 19.599999999999998 15.75 C 21.946666666666665 12.45 23.119999999999997 10.25 25.466666666666665 7.5 C 27.813333333333333 4.75 28.986666666666665 2.5500000000000007 31.333333333333332 2 C 33.68 1.4500000000000002 34.85333333333333 3.0999999999999996 37.199999999999996 4.75 C 39.54666666666666 6.4 40.71999999999999 6.4 43.06666666666666 10.25 C 45.41333333333333 14.1 46.586666666666666 21.25 48.93333333333333 24 C 51.279999999999994 26.75 52.45333333333333 24.55 54.8 24 C 57.14666666666666 23.45 58.32 24 60.666666666666664 21.25 C 63.01333333333333 18.5 64.18666666666667 13.55 66.53333333333333 10.25 C 68.88 6.949999999999999 70.05333333333333 6.4 72.39999999999999 4.75 C 74.74666666666666 3.1 75.92 1.4500000000000006 78.26666666666667 2 C 80.61333333333333 2.55 81.78666666666666 4.750000000000001 84.13333333333333 7.5 C 86.47999999999999 10.25 88.82666666666667 14.1 90 15.75" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-revenue-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              $41,200.00
                            </span>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Active
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_2f_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="21">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-pin-size) * 1px)"}}>
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="17" x2="12" y2="22"></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Brooklyn Simmons
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="brooklyn@paypal.com">
                                  brooklyn@paypal.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5" aria-hidden="true" viewBox="7.056000232696533 3 37.35095977783203 45">
                                    <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
                                      <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                                      <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                                      <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
                                    </g>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                PayPal
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-100 border-0 border-transparent dark:bg-amber-950/50 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-amber-800 text-xs transition-shadow">
                                E-commerce
                              </Badge>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="12" aria-valuetext="12%" role="progressbar" aria-labelledby="base-ui-_r_2i_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2i_" role="presentation">
                                Lead score
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                12%
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "12%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                x
                              </span>
                            </Progress>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stock-size) * 1px)"}}>
                            <svg className="shrink-0" width="92" height="26" viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 5.142857142857142 C 3.173333333333333 7.657142857142857 5.519999999999998 14.571428571428573 7.866666666666666 17.714285714285715 C 10.213333333333333 20.857142857142858 11.386666666666667 20.857142857142858 13.733333333333333 20.857142857142858 C 16.08 20.857142857142858 17.25333333333333 20.22857142857143 19.599999999999998 17.714285714285715 C 21.946666666666665 15.2 23.119999999999997 11.428571428571427 25.466666666666665 8.285714285714285 C 27.813333333333333 5.142857142857141 28.986666666666665 3.2571428571428576 31.333333333333332 2 C 33.68 0.7428571428571429 34.85333333333333 2.0000000000000004 37.199999999999996 2 C 39.54666666666666 2 40.72 0.7428571428571438 43.06666666666666 2 C 45.41333333333333 3.257142857142857 46.58666666666666 4.514285714285714 48.93333333333333 8.285714285714285 C 51.279999999999994 12.057142857142857 52.453333333333326 17.714285714285715 54.8 20.857142857142858 C 57.14666666666666 24 58.32 25.25714285714286 60.666666666666664 24 C 63.01333333333333 22.742857142857144 64.18666666666667 18.34285714285714 66.53333333333333 14.571428571428571 C 68.88 10.799999999999999 70.05333333333333 7.657142857142857 72.39999999999999 5.142857142857142 C 74.74666666666666 2.628571428571428 75.92 2.6285714285714286 78.26666666666667 2 C 80.61333333333333 1.3714285714285717 81.78666666666666 2.0000000000000004 84.13333333333333 2 C 86.47999999999999 2 88.82666666666667 2 90 2" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-revenue-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              $0.00
                            </span>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full! shrink-0 size-1.5"></span>
                              Churned
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_2m_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="22">
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-pin-size) * 1px)"}}>
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="17" x2="12" y2="22"></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-red-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium line-clamp-1 text-foreground">
                                  Cody Fisher
                                </div>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="cody@zoom.us">
                                  cody@zoom.us
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <defs>
                                      <lineargradient id="_r_2p_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
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
                                    <path fill="url(#_r_2p_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                    <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <span className="font-medium min-w-0 text-foreground truncate">
                                Zoom
                              </span>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                Digital
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-100 border-0 border-transparent dark:bg-rose-950/50 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-rose-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-yellow-100 border-0 border-transparent dark:bg-yellow-950/50 dark:text-yellow-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs text-yellow-800 transition-shadow">
                                Automation
                              </Badge>
                            </div>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55" aria-valuetext="55%" role="progressbar" aria-labelledby="base-ui-_r_2q_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2q_" role="presentation">
                                Lead score
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                55%
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "55%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                x
                              </span>
                            </Progress>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stock-size) * 1px)"}}>
                            <svg className="shrink-0" width="92" height="26" viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 18.5 C 3.173333333333333 19.6 5.52 22.9 7.866666666666666 24 C 10.213333333333333 25.1 11.386666666666667 25.650000000000002 13.733333333333333 24 C 16.08 22.35 17.25333333333333 19.05 19.599999999999998 15.75 C 21.946666666666665 12.45 23.119999999999997 10.25 25.466666666666665 7.5 C 27.813333333333333 4.75 28.986666666666665 2.5500000000000007 31.333333333333332 2 C 33.68 1.4500000000000002 34.85333333333333 3.0999999999999996 37.199999999999996 4.75 C 39.54666666666666 6.4 40.71999999999999 6.4 43.06666666666666 10.25 C 45.41333333333333 14.1 46.586666666666666 21.25 48.93333333333333 24 C 51.279999999999994 26.75 52.45333333333333 24.55 54.8 24 C 57.14666666666666 23.45 58.32 24 60.666666666666664 21.25 C 63.01333333333333 18.5 64.18666666666667 13.55 66.53333333333333 10.25 C 68.88 6.949999999999999 70.05333333333333 6.4 72.39999999999999 4.75 C 74.74666666666666 3.1 75.92 1.4500000000000006 78.26666666666667 2 C 80.61333333333333 2.55 81.78666666666666 4.750000000000001 84.13333333333333 7.5 C 86.47999999999999 10.25 88.82666666666667 14.1 90 15.75" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-revenue-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              $38,900.00
                            </span>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              Active
                            </Badge>
                          </td>
                          <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_2u_" aria-expanded="false">
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  Rows per page
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_31_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    5
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_31_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  1 - 5 of 22
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
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 4">
                    4
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 5">
                    5
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
