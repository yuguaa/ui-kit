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
import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
} from "@/registry-neui/bases/radix/neui/kanban"
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
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
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
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        AI feature flags data grid
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <Frame className="w-full" spacing="sm">
          <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-px">
              <div className="font-semibold text-balance text-sm">
                AI Feature Flags
              </div>
              <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-pretty text-xs">
                <span>
                  13 flags
                </span>
                <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  5 live
                </span>
                <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  4 staged
                </span>
              </div>
            </div>
            <Sheet>
            <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New Flag
            </SheetTrigger>
            </Sheet>
          </header>
          <FramePanel className="p-0 shadow-none!">
            <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
              <Tabs data-orientation="horizontal" activationDirection="none">
                <TabsList className="flex-wrap gap-x-5 gap-y-2 h-auto justify-start w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                  <TabsTrigger className="flex-none gap-2 h-8 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_3_" compositeItemActive="">
                    <span>
                      All
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      13
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="flex-none gap-2 h-8 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                    <span>
                      Live
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      5
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="flex-none gap-2 h-8 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                    <span>
                      Staged
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      4
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="flex-none gap-2 h-8 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                    <span>
                      Review
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      2
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="flex-none gap-2 h-8 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
                    <span>
                      Paused
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      2
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-2.5">
              <Filters>
                <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                  <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Flag contains no value" ruleId="flag-1" tabIndex="0" index="0">
                    <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Flag">
                      <svg className="lucide lucide-search size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <span className="flex items-center">
                        <span>
                          Flag
                        </span>
                      </span>
                    </div>
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_a_" aria-haspopup="dialog" aria-expanded="false">
                      contains
                    </PopoverTrigger>
                    </Popover>
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search flags..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                      Search flags...
                    </PopoverTrigger>
                    </Popover>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Flag filter options" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
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
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_j_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  Filters
                </PopoverTrigger>
                </Popover>
                <div className="sr-only" aria-live="polite" role="status">
                  <span></span>
                </div>
              </Filters>
              <div className="flex flex-wrap gap-2 items-center justify-end">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-funnel-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FunnelXIcon" tabler="IconFilterOff" hugeicons="FilterRemoveIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilterOffLine" aria-hidden="true">
                    <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                    <path d="m16.5 3.5 5 5"></path>
                    <path d="m21.5 3.5-5 5"></path>
                  </svg>
                  Clear
                </Button>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_k_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "30px"}} />
                          <col style={{width: "360px"}} />
                          <col style={{width: "175px"}} />
                          <col style={{width: "150px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "105px"}} />
                          <col style={{width: "125px"}} />
                          <col style={{width: "56px"}} />
                        </colgroup>
                        <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "30px"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_l_" aria-checked="false" aria-label="Select all"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pl-3! px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="flag" data-header-id="flag" data-header-depth="0" style={{width: "360px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Flag
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "175px"}}>
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
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="readiness" data-header-id="readiness" data-header-depth="0" style={{width: "150px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Readiness
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="state" data-header-id="state" data-header-depth="0" style={{width: "130px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Stage
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="enabled" data-header-id="enabled" data-header-depth="0" style={{width: "105px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Enabled
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="updatedAt" data-header-id="updatedAt" data-header-depth="0" style={{width: "125px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Last updated
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-risk-summary-canary">
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle pl-3! px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border dark:text-sky-300 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sky-600" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-message-square-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                      <path d="M7 11h10"></path>
                                      <path d="M7 15h6"></path>
                                      <path d="M7 7h8"></path>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-px min-w-0">
                                  <Button className="cursor-pointer font-medium h-auto justify-start min-w-0 p-0 text-foreground text-left text-sm" type="button" tabIndex="0">
                                    <span className="truncate">
                                      Risk summary prompt canary
                                    </span>
                                  </Button>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      PROV-2041 OpenRoute Primary
                                    </span>
                                    <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Canary 10%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <div className="relative shrink-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium line-clamp-1 text-foreground">
                                    Mira Stone
                                  </div>
                                  <div className="line-clamp-1 text-muted-foreground text-xs" title="mira@ops.example">
                                    Product
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Rating>
                                <div className="flex items-center">
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "80%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-xs w-5">
                                  4.8
                                </span>
                              </Rating>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Staged
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center">
                                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_r_" aria-checked="true" size="sm" aria-label="Toggle Risk summary prompt canary">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                </Switch>
                                <input id="base-ui-_r_s_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex flex-col gap-px min-w-0">
                                <span className="text-foreground text-sm">
                                  Jun 12, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  Today
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <div className="flex items-center justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Risk summary prompt canary" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-provider-fallback-router">
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_13_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle pl-3! px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border dark:text-violet-300 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-violet-600" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-px min-w-0">
                                  <Button className="cursor-pointer font-medium h-auto justify-start min-w-0 p-0 text-foreground text-left text-sm" type="button" tabIndex="0">
                                    <span className="truncate">
                                      Provider fallback router
                                    </span>
                                  </Button>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      PROV-2042 Northstar Claude Pool
                                    </span>
                                    <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Enterprise tier
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <div className="relative shrink-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Leo Grant" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="absolute bg-red-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium line-clamp-1 text-foreground">
                                    Leo Grant
                                  </div>
                                  <div className="line-clamp-1 text-muted-foreground text-xs" title="leo@ops.example">
                                    Engineering
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Rating>
                                <div className="flex items-center">
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "70%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-xs w-5">
                                  4.7
                                </span>
                              </Rating>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Live
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center">
                                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_16_" aria-checked="true" size="sm" aria-label="Toggle Provider fallback router">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                </Switch>
                                <input id="base-ui-_r_17_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex flex-col gap-px min-w-0">
                                <span className="text-foreground text-sm">
                                  Jun 12, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  Today
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <div className="flex items-center justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Provider fallback router" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-payment-action-guardrail">
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle pl-3! px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border dark:text-emerald-300 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-emerald-600" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                      <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-px min-w-0">
                                  <Button className="cursor-pointer font-medium h-auto justify-start min-w-0 p-0 text-foreground text-left text-sm" type="button" tabIndex="0">
                                    <span className="truncate">
                                      Payment action guardrail
                                    </span>
                                  </Button>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      PROV-2043 Local Guardrail Runner
                                    </span>
                                    <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Safety holdout
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <div className="relative shrink-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Nora Vale" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium line-clamp-1 text-foreground">
                                    Nora Vale
                                  </div>
                                  <div className="line-clamp-1 text-muted-foreground text-xs" title="nora@ops.example">
                                    Safety
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Rating>
                                <div className="flex items-center">
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "30%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-xs w-5">
                                  4.3
                                </span>
                              </Rating>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Review
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center">
                                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1h_" aria-checked="false" size="sm" aria-label="Toggle Payment action guardrail">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                </Switch>
                                <input id="base-ui-_r_1i_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex flex-col gap-px min-w-0">
                                <span className="text-foreground text-sm">
                                  Jun 11, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  Today
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <div className="flex items-center justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Payment action guardrail" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-vectoredge-low-cost-mode">
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1p_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle pl-3! px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border dark:text-rose-300 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-rose-600" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-circle-dollar-sign size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                      <path d="M12 18V6"></path>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-px min-w-0">
                                  <Button className="cursor-pointer font-medium h-auto justify-start min-w-0 p-0 text-foreground text-left text-sm" type="button" tabIndex="0">
                                    <span className="truncate">
                                      VectorEdge low-cost mode
                                    </span>
                                  </Button>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      PROV-2044 VectorEdge Small
                                    </span>
                                    <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Finance review
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <div className="relative shrink-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Priya Patel" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="absolute bg-gray-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium line-clamp-1 text-foreground">
                                    Priya Patel
                                  </div>
                                  <div className="line-clamp-1 text-muted-foreground text-xs" title="priya@ops.example">
                                    Finance
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Rating>
                                <div className="flex items-center">
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "90%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-xs w-5">
                                  3.9
                                </span>
                              </Rating>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-zinc-400 dark:bg-zinc-300 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Paused
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center">
                                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1s_" aria-checked="false" size="sm" aria-label="Toggle VectorEdge low-cost mode">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                </Switch>
                                <input id="base-ui-_r_1t_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex flex-col gap-px min-w-0">
                                <span className="text-foreground text-sm">
                                  Jun 10, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  This week
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <div className="flex items-center justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for VectorEdge low-cost mode" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-long-context-summarizer">
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_24_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle pl-3! px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border dark:text-amber-300 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-amber-600" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-database size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-px min-w-0">
                                  <Button className="cursor-pointer font-medium h-auto justify-start min-w-0 p-0 text-foreground text-left text-sm" type="button" tabIndex="0">
                                    <span className="truncate">
                                      Long context summarizer
                                    </span>
                                  </Button>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      PROV-2045 Batch Summarizer Fleet
                                    </span>
                                    <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Internal beta
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <div className="relative shrink-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Theo Park" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="absolute bg-yellow-400 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium line-clamp-1 text-foreground">
                                    Theo Park
                                  </div>
                                  <div className="line-clamp-1 text-muted-foreground text-xs" title="theo@ops.example">
                                    Reliability
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Rating>
                                <div className="flex items-center">
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <div className="absolute inset-0 overflow-hidden" style={{width: "50%"}}>
                                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-xs w-5">
                                  4.5
                                </span>
                              </Rating>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Staged
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex items-center">
                                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_27_" aria-checked="true" size="sm" aria-label="Toggle Long context summarizer">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                </Switch>
                                <input id="base-ui-_r_28_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex flex-col gap-px min-w-0">
                                <span className="text-foreground text-sm">
                                  Jun 10, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  This week
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                              <div className="flex items-center justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Long context summarizer" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
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
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <DataGridPagination>
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    Rows per page
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_2f_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      5
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_2f_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    1 - 5 of 13
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
          </FramePanel>
        </Frame>
        <Frame className="@container w-full" spacing="sm">
          <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="font-semibold text-sm">
                Related Operations
              </div>
              <div className="text-muted-foreground text-sm">
                Follow-up lanes linked to this flag registry.
              </div>
            </div>
            <div className="flex gap-2 items-center shrink-0 sm:w-auto w-full">
              <Button type="button" tabIndex="0">
                Policy
              </Button>
              <Sheet>
              <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_2j_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New Action
              </SheetTrigger>
              </Sheet>
            </div>
          </header>
          <Kanban className="min-w-0" dragging="false">
            <KanbanBoard className="@4xl:grid-cols-4 gap-1 grid-cols-1">
              <KanbanColumn className="min-w-0 self-stretch" value="management" dragging="false">
                <FramePanel className="flex flex-col gap-4 group/column h-full" aria-label="Management: Prompt work.">
                  <div className="flex gap-3 items-start">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-kanban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KanbanIcon" tabler="IconLayoutKanban" hugeicons="DashboardSquare02Icon" phosphor="KanbanIcon" remixicon="RiKanbanView" aria-hidden="true">
                          <path d="M5 3v14"></path>
                          <path d="M12 3v8"></path>
                          <path d="M19 3v18"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2 items-center min-w-0">
                        <h3 className="font-semibold leading-tight text-foreground text-sm truncate">
                          Management
                        </h3>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          3
                        </Badge>
                      </div>
                      <p className="leading-relaxed pt-1 text-muted-foreground text-xs">
                        Prompt work.
                      </p>
                    </div>
                    <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Management column">
                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                      </svg>
                    </KanbanColumnHandle>
                  </div>
                  <KanbanColumnContent className="min-h-48">
                    <KanbanItem value="flag-risk-summary-canary" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Risk summary prompt canary">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Risk summary prompt canary
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Mira Stone
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Canary 10%
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.8 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Staged
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-agent-handoff-composer" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Agent handoff composer">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Agent handoff composer
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Alex Johnson
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Internal QA
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.2 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Review
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-batch-invoice-explainer" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Batch invoice explainer">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Batch invoice explainer
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Elijah Morgan
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Enterprise billing
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                3.8 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Paused
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                  </KanbanColumnContent>
                </FramePanel>
              </KanbanColumn>
              <KanbanColumn className="min-w-0 self-stretch" value="review" dragging="false">
                <FramePanel className="flex flex-col gap-4 group/column h-full" aria-label="Review Lane: Approval and safety backlog.">
                  <div className="flex gap-3 items-start">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2 items-center min-w-0">
                        <h3 className="font-semibold leading-tight text-foreground text-sm truncate">
                          Review Lane
                        </h3>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          3
                        </Badge>
                      </div>
                      <p className="leading-relaxed pt-1 text-muted-foreground text-xs">
                        Approval and safety backlog.
                      </p>
                    </div>
                    <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Review Lane column">
                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                      </svg>
                    </KanbanColumnHandle>
                  </div>
                  <KanbanColumnContent className="min-h-48">
                    <KanbanItem value="flag-payment-action-guardrail" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Payment action guardrail">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Payment action guardrail
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Nora Vale
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Safety holdout
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.3 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Review
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-sensitive-data-redact-pass" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Sensitive data redact pass">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Sensitive data redact pass
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Sana Qureshi
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                All safety paths
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.9 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Live
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-safety-refusal-tuning" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Safety refusal tuning">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Safety refusal tuning
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Nora Vale
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Safety review
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.5 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Staged
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                  </KanbanColumnContent>
                </FramePanel>
              </KanbanColumn>
              <KanbanColumn className="min-w-0 self-stretch" value="rollout" dragging="false">
                <FramePanel className="flex flex-col gap-4 group/column h-full" aria-label="Rollout Watch: Traffic changes in motion.">
                  <div className="flex gap-3 items-start">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                          <circle cx="6" cy="19" r="3"></circle>
                          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                          <circle cx="18" cy="5" r="3"></circle>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2 items-center min-w-0">
                        <h3 className="font-semibold leading-tight text-foreground text-sm truncate">
                          Rollout Watch
                        </h3>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          3
                        </Badge>
                      </div>
                      <p className="leading-relaxed pt-1 text-muted-foreground text-xs">
                        Traffic changes in motion.
                      </p>
                    </div>
                    <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Rollout Watch column">
                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                      </svg>
                    </KanbanColumnHandle>
                  </div>
                  <KanbanColumnContent className="min-h-48">
                    <KanbanItem value="flag-provider-fallback-router" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Provider fallback router">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Provider fallback router
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Leo Grant
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Enterprise tier
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.7 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Live
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-retrieval-reranker-v2" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Retrieval reranker v2">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Retrieval reranker v2
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Kenji Tan
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Canary 25%
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.4 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Staged
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-route-idle-chats-local" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Route idle chats local">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Route idle chats local
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Theo Park
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Internal traffic
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.4 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Live
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                  </KanbanColumnContent>
                </FramePanel>
              </KanbanColumn>
              <KanbanColumn className="min-w-0 self-stretch" value="cost" dragging="false">
                <FramePanel className="flex flex-col gap-4 group/column h-full" aria-label="Cost Guard: Provider and spend exposure.">
                  <div className="flex gap-3 items-start">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                          <path d="M12 18V6"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2 items-center min-w-0">
                        <h3 className="font-semibold leading-tight text-foreground text-sm truncate">
                          Cost Guard
                        </h3>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          3
                        </Badge>
                      </div>
                      <p className="leading-relaxed pt-1 text-muted-foreground text-xs">
                        Provider and spend exposure.
                      </p>
                    </div>
                    <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Cost Guard column">
                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                      </svg>
                    </KanbanColumnHandle>
                  </div>
                  <KanbanColumnContent className="min-h-48">
                    <KanbanItem value="flag-vectoredge-low-cost-mode" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open VectorEdge low-cost mode">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                VectorEdge low-cost mode
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Priya Patel
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Finance review
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                3.9 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Paused
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-long-context-summarizer" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open Long context summarizer">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                Long context summarizer
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Theo Park
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Internal beta
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.5 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Staged
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                    <KanbanItem value="flag-high-cost-provider-cap" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                      <KanbanItemHandle className="block" dragging="false">
                        <Item className="bg-background flex-nowrap gap-2 hover:bg-muted/40 hover:border-primary/40 p-2 shadow-xs text-left" type="button" variant="outline" size="default" aria-label="Open High cost provider cap">
                          <ItemContent className="gap-2 min-w-0">
                            <div className="flex gap-2 items-start justify-between min-w-0">
                              <ItemTitle className="font-medium leading-4 max-w-full text-xs">
                                High cost provider cap
                              </ItemTitle>
                              <svg className="lucide lucide-grip-vertical mt-0.5 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                Priya Patel
                              </span>
                              <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                Spend control
                              </span>
                            </div>
                            <div className="flex gap-2 items-center justify-between min-w-0">
                              <span className="text-muted-foreground text-xs truncate">
                                4.6 readiness
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Live
                              </Badge>
                            </div>
                          </ItemContent>
                        </Item>
                      </KanbanItemHandle>
                    </KanbanItem>
                  </KanbanColumnContent>
                </FramePanel>
              </KanbanColumn>
            </KanbanBoard>
          </Kanban>
          <div id="DndDescribedBy-0" style={{display: "none"}}>
            To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
          </div>
          <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
        </Frame>
      </div>
    </main>
  )
}
