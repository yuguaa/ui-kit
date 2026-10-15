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
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Field } from "@/registry/bases/base/ui/field"
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
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Task management data grid
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              Task Delivery
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              16 tasks / Sub-tasks on
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            New task
          </Button>
        </header>
        <FramePanel className="p-0 shadow-none!">
          <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList className="gap-5" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                  <span>
                    All tasks
                  </span>
                  <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                    16
                  </span>
                </TabsTrigger>
                <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                  <span>
                    Active
                  </span>
                  <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                    10
                  </span>
                </TabsTrigger>
                <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                  <span>
                    Backlog
                  </span>
                  <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                    4
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-2.5">
            <Filters>
              <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Task contains no value" ruleId="title-1" tabIndex="0" index="0">
                  <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Task">
                    <span className="flex items-center">
                      <span>
                        Task
                      </span>
                    </span>
                  </div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
                    contains
                  </PopoverTrigger>
                  </Popover>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search tasks..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_8_" aria-haspopup="dialog" aria-expanded="false">
                    Search tasks...
                  </PopoverTrigger>
                  </Popover>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task filter options" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
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
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_f_" aria-haspopup="dialog" aria-expanded="false">
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
            <div className="flex gap-2 items-center justify-end">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_h_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                Settings
              </PopoverTrigger>
              </Popover>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_i_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport style={{width: "calc(1214px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridTable style={{"--header-title-size": "578", "--col-title-size": "578", "--header-status-size": "138", "--col-status-size": "138", "--header-assignee-size": "160", "--col-assignee-size": "160", "--header-priority-size": "122", "--col-priority-size": "122", "--header-project-size": "160", "--col-project-size": "160", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1214px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-title-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-assignee-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-priority-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-project-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="title" data-header-id="title" data-header-depth="0" style={{width: "calc(var(--header-title-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                Task
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
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
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="assignee" data-header-id="assignee" data-header-depth="0" style={{width: "calc(var(--header-assignee-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                Assignee
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="priority" data-header-id="priority" data-header-depth="0" style={{width: "calc(var(--header-priority-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                Priority
                                <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                  <path d="M12 5v14"></path>
                                  <path d="m19 12-7 7-7-7"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="project" data-header-id="project" data-header-depth="0" style={{width: "calc(var(--header-project-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                Project
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                            <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0">
                              <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Hide 4 sub-tasks for Finalize licensed registry handshake for private installs">
                                <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1c_" aria-checked="false" aria-label="Mark Finalize licensed registry handshake for private installs complete"></Checkbox>
                                <input id="task-complete-1" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Finalize licensed registry handshake for private installs
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              In Progress
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Maya Perez
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Urgent
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Registry API
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions" aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="NEUI-241-sub-1">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0 pl-12">
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="true" aria-label="Mark Lock the signed entitlement payload shape as incomplete">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input id="sub-task-complete-1-NEUI-241-sub-1" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer decoration-1 decoration-current/55 hover:text-primary line-through max-w-full py-0.25 text-muted-foreground transition-colors truncate">
                                        Lock the signed entitlement payload shape
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Done
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Maya Perez
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Urgent
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Registry API
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Lock the signed entitlement payload shape" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="NEUI-241-sub-2">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0 pl-12">
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1s_" aria-checked="true" aria-label="Mark Validate private install signature rotation as incomplete">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input id="sub-task-complete-1-NEUI-241-sub-2" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer decoration-1 decoration-current/55 hover:text-primary line-through max-w-full py-0.25 text-muted-foreground transition-colors truncate">
                                        Validate private install signature rotation
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Done
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Jonas Reed" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Jonas Reed
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Registry API
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Validate private install signature rotation" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="NEUI-241-sub-3">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0 pl-12">
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_24_" aria-checked="false" aria-label="Mark Add replay guard for expired install links complete"></Checkbox>
                                <input id="sub-task-complete-1-NEUI-241-sub-3" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Add replay guard for expired install links
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              In Progress
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Emil Novak" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Emil Novak
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Urgent
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Registry API
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Add replay guard for expired install links" aria-haspopup="menu" id="base-ui-_r_2a_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="NEUI-241-sub-4">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0 pl-12">
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2c_" aria-checked="false" aria-label="Mark Document the fallback flow for invalid claims complete"></Checkbox>
                                <input id="sub-task-complete-1-NEUI-241-sub-4" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Document the fallback flow for invalid claims
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              In Progress
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Maya Perez
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Registry API
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Document the fallback flow for invalid claims" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="6">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0">
                              <div className="shrink-0 size-6" aria-hidden="true"></div>
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2k_" aria-checked="false" aria-label="Mark Audit session invalidation when workspace roles change complete"></Checkbox>
                                <input id="task-complete-6" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Audit session invalidation when workspace roles change
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Todo
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Jonas Reed" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Jonas Reed
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Urgent
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Workspace Access
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions" aria-haspopup="menu" id="base-ui-_r_2q_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="14">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0">
                              <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show 3 sub-tasks for Wire project health badges into the launch command center">
                                <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2s_" aria-checked="false" aria-label="Mark Wire project health badges into the launch command center complete"></Checkbox>
                                <input id="task-complete-14" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Wire project health badges into the launch command center
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              In Progress
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Pavel Singh" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Pavel Singh
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Urgent
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Launch Analytics
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions" aria-haspopup="menu" id="base-ui-_r_32_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0">
                              <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show 3 sub-tasks for Design empty states for expiring team seat invitations">
                                <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_34_" aria-checked="false" aria-label="Mark Design empty states for expiring team seat invitations complete"></Checkbox>
                                <input id="task-complete-2" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Design empty states for expiring team seat invitations
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Todo
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Noa Kim
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Workspace Access
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions" aria-haspopup="menu" id="base-ui-_r_3a_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                            <div className="flex gap-2 items-start min-w-0">
                              <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show 5 sub-tasks for Add audit trail hooks to task status change events">
                                <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                              <Field className="flex-1 gap-2 items-start min-w-0 relative" role="group" data-orientation="horizontal">
                                <Checkbox className="mt-0.5 rounded-full" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3c_" aria-checked="false" aria-label="Mark Add audit trail hooks to task status change events complete"></Checkbox>
                                <input id="task-complete-3" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex font-medium items-center leading-5 min-w-0 text-foreground text-sm transition-colors">
                                    <span className="gap-1 group/task-title inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        Add audit trail hooks to task status change events
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </Field>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-assignee-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Emil Novak" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="text-foreground text-sm truncate">
                                Emil Novak
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-project-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Task Delivery
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions" aria-haspopup="menu" id="base-ui-_r_3i_" aria-expanded="false">
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
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_3k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    5
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_3k_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  1 - 5 of 16
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
