import { CascaderTrigger } from "@/registry-neui/bases/base/neui/cascader/cascader"
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Companies
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between max-sm:flex-col max-sm:items-start px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              Companies
            </div>
            <div className="text-muted-foreground text-xs">
              <span className="gap-1.5 inline-flex items-center whitespace-nowrap">
                <span>
                  8 active
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  1 at risk
                </span>
              </span>
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add company
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="flex flex-col gap-2 px-(--frame-panel-header-px) py-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex gap-2 items-center min-w-0">
              <Filters>
                <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                  <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Company contains no value" ruleId="company-name-1" tabIndex="0" index="0">
                    <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Company">
                      <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                      <span className="flex items-center">
                        <span>
                          Company
                        </span>
                      </span>
                    </div>
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false">
                      contains
                    </PopoverTrigger>
                    </Popover>
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search companies..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                      Search companies...
                    </PopoverTrigger>
                    </Popover>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Company filter options" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
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
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  Filter
                </PopoverTrigger>
                </Popover>
                <div className="sr-only" aria-live="polite" role="status">
                  <span></span>
                </div>
              </Filters>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <CascaderTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 style-luma:[&_svg:not([class*='size-'])]:size-4 style-lyra:[&_svg:not([class*='size-'])]:size-4 style-maia:[&_svg:not([class*='size-'])]:size-4 style-mira:[&_svg:not([class*='size-'])]:size-3.5 style-nova:[&_svg:not([class*='size-'])]:size-4 style-rhea:[&_svg:not([class*='size-'])]:size-4 style-sera:[&_svg:not([class*='size-'])]:size-3.5 style-vega:[&_svg:not([class*='size-'])]:size-4 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_e_" role="combobox" aria-expanded="false" aria-haspopup="dialog" aria-label="Columns">
                <svg className="lucide lucide-columns-3 lucide-columns3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
                Columns
              </CascaderTrigger>
              <input id="base-ui-_r_e_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_i_" aria-haspopup="dialog" aria-expanded="false">
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
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_j_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport style={{width: "calc(1214px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridTable style={{"--header-select-size": "40", "--col-select-size": "40", "--header-company-name-size": "328", "--col-company-name-size": "328", "--header-people-owner-size": "170", "--col-people-owner-size": "170", "--header-deal-stage-size": "130", "--col-deal-stage-size": "130", "--header-deal-arr-size": "120", "--col-deal-arr-size": "120", "--header-company-categories-size": "220", "--col-company-categories-size": "220", "--header-engagement-health-size": "150", "--col-engagement-health-size": "150", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1214px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-company-name-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-people-owner-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-deal-stage-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-deal-arr-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-company-categories-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-engagement-health-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-4! px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" data-last-col="start" style={{top: "0px", width: "calc(var(--header-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_k_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="company-name" data-header-id="company-name" data-header-depth="0" style={{width: "calc(var(--header-company-name-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
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
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="people-owner" data-header-id="people-owner" data-header-depth="0" style={{width: "calc(var(--header-people-owner-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                <svg className="lucide lucide-user size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                Owner
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="deal-stage" data-header-id="deal-stage" data-header-depth="0" style={{width: "calc(var(--header-deal-stage-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                <svg className="lucide lucide-chevrons-up-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                                Stage
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="deal-arr" data-header-id="deal-arr" data-header-depth="0" style={{width: "calc(var(--header-deal-arr-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                <svg className="lucide lucide-circle-dollar-sign size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                  <path d="M12 18V6"></path>
                                </svg>
                                ARR
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="company-categories" data-header-id="company-categories" data-header-depth="0" style={{width: "calc(var(--header-company-categories-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
                                <svg className="lucide lucide-list-checks size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                  <path d="M13 5h8"></path>
                                  <path d="M13 12h8"></path>
                                  <path d="M13 19h8"></path>
                                  <path d="m3 17 2 2 4-4"></path>
                                  <path d="m3 7 2 2 4-4"></path>
                                </svg>
                                Categories
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="engagement-health" data-header-id="engagement-health" data-header-depth="0" style={{width: "calc(var(--header-engagement-health-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                                <svg className="lucide lucide-hash size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                                  <line x1="4" x2="20" y1="9" y2="9"></line>
                                  <line x1="4" x2="20" y1="15" y2="15"></line>
                                  <line x1="10" x2="8" y1="3" y2="21"></line>
                                  <line x1="16" x2="14" y1="3" y2="21"></line>
                                </svg>
                                Health
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 justify-center px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{top: "0px", width: "calc(var(--header-actions-size) * 1px)"}}></th>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4192">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1l_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <span className="dark:hidden" aria-hidden="true">
                                  <svg className="size-5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                    <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                  </svg>
                                </span>
                                <span className="dark:block hidden" aria-hidden="true">
                                  <svg className="size-5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                    <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                  </svg>
                                </span>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open OpenAI">
                                  OpenAI
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  openai.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Mira Stone
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              Committed
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $1.48M
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                Design partner
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                92
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for OpenAI" aria-haspopup="menu" id="base-ui-_r_1r_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4188">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1t_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <span className="dark:hidden" aria-hidden="true">
                                  <svg className="size-5" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                    <title>
                                      Anthropic
                                    </title>
                                    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                                  </svg>
                                </span>
                                <span className="dark:block hidden" aria-hidden="true">
                                  <svg className="size-5" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                    <title>
                                      Anthropic
                                    </title>
                                    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                                  </svg>
                                </span>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Anthropic">
                                  Anthropic
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  anthropic.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Nora Vale
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              Proposal
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $960K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-100 border-0 border-transparent dark:bg-amber-950/50 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-amber-800 text-xs transition-shadow">
                                Regulated
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="84" aria-valuetext="84%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "84%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                84
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Anthropic" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4176">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_25_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <svg className="size-5" fill="none" viewBox="100 100 312 312">
                                  <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Stripe">
                                  Stripe
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  stripe.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Mira Stone
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                              Renewal
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $720K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border-0 border-transparent dark:bg-emerald-950/50 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-emerald-800 text-xs transition-shadow">
                                Expansion
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="76" aria-valuetext="76%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "76%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                76
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4165">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2d_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <svg className="size-5" viewBox="0 0 109 113" fill="none">
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
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Supabase">
                                  Supabase
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  supabase.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Alex Johnson
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Evaluation
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $288K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border-0 border-transparent dark:bg-cyan-950/50 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-cyan-800 text-xs transition-shadow">
                                Open source
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border-0 border-transparent dark:bg-emerald-950/50 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-emerald-800 text-xs transition-shadow">
                                Expansion
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "81%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                81
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Supabase" aria-haspopup="menu" id="base-ui-_r_2j_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4151">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2l_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <span className="dark:hidden" aria-hidden="true">
                                  <svg className="[&_path]:fill-current size-5 text-foreground" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                                    <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                                  </svg>
                                </span>
                                <span className="dark:block hidden" aria-hidden="true">
                                  <svg className="[&_path]:fill-current size-5 text-foreground" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                                    <path fill="#fff" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                                  </svg>
                                </span>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Cursor">
                                  Cursor
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  cursor.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Nora Vale
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              Proposal
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $415K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                Design partner
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border-0 border-transparent dark:bg-emerald-950/50 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-emerald-800 text-xs transition-shadow">
                                Expansion
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="88" aria-valuetext="88%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "88%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                88
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Cursor" aria-haspopup="menu" id="base-ui-_r_2r_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4144">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2t_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <span className="dark:hidden" aria-hidden="true">
                                  <svg className="size-5 text-foreground" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <path d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                                  </svg>
                                </span>
                                <span className="dark:block hidden" aria-hidden="true">
                                  <svg className="size-5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                                  </svg>
                                </span>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open PlanetScale">
                                  PlanetScale
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  planetscale.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Theo Park
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Evaluation
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $196K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                Enterprise
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="61" aria-valuetext="61%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "61%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                61
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PlanetScale" aria-haspopup="menu" id="base-ui-_r_33_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4130">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_35_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <svg className="size-5" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                  <defs>
                                    <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                      <stop offset="0%" stopColor="#62F755"></stop>
                                      <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                    </lineargradient>
                                    <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                      <stop offset="0%" stopOpacity=".9"></stop>
                                      <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                  <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                  <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                  <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                  <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                </svg>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Neon">
                                  Neon
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  neon.tech
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Alex Johnson
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Discovery
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $84K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                Self-serve
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border-0 border-transparent dark:bg-cyan-950/50 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-cyan-800 text-xs transition-shadow">
                                Open source
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="54" aria-valuetext="54%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "54%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                54
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Neon" aria-haspopup="menu" id="base-ui-_r_3b_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4122">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3d_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <span className="dark:hidden" aria-hidden="true">
                                  <svg className="size-5" viewBox="0 0 256 310" preserveAspectRatio="xMidYMid">
                                    <path d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"></path>
                                  </svg>
                                </span>
                                <span className="dark:block hidden" aria-hidden="true">
                                  <svg className="size-5" viewBox="0 0 256 310" preserveAspectRatio="xMidYMid">
                                    <path fill="#fff" d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"></path>
                                  </svg>
                                </span>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Prisma">
                                  Prisma
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  prisma.io
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Theo Park
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                              Renewal
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $132K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border-0 border-transparent dark:bg-cyan-950/50 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-cyan-800 text-xs transition-shadow">
                                Open source
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="38" aria-valuetext="38%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "38%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                38
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Prisma" aria-haspopup="menu" id="base-ui-_r_3j_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4118">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3l_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <svg className="size-5" viewBox="28 28 128 132" fill="none">
                                  <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                                  <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                                  <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                                </svg>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Convex">
                                  Convex
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  convex.dev
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Alex Johnson
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              Discovery
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $36K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                Self-serve
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" aria-valuetext="67%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "67%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                67
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Convex" aria-haspopup="menu" id="base-ui-_r_3r_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp-4103">
                          <td className="align-middle ps-4! px-3 py-2" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3t_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center justify-center shrink-0 size-5">
                                <span className="dark:hidden" aria-hidden="true">
                                  <svg className="size-5" viewBox="0 0 1800 1800" fill="none">
                                    <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                                  </svg>
                                </span>
                                <span className="dark:block hidden" aria-hidden="true">
                                  <svg className="size-5" viewBox="0 0 1800 1800" fill="none">
                                    <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                                  </svg>
                                </span>
                              </span>
                              <div className="min-w-0">
                                <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="Open Resend">
                                  Resend
                                </a>
                                <span className="block text-muted-foreground text-xs truncate">
                                  resend.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-people-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                Mira Stone
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Evaluation
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-deal-arr-size) * 1px)"}}>
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              $61K
                            </span>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-company-categories-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border-0 border-transparent dark:bg-emerald-950/50 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-emerald-800 text-xs transition-shadow">
                                Expansion
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                Self-serve
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-engagement-health-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5 flex-1 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="79" aria-valuetext="79%" role="progressbar" aria-label="Account health">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "79%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                79
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle justify-center px-3 py-2" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Resend" aria-haspopup="menu" id="base-ui-_r_43_" aria-expanded="false">
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
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_45_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    10
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_45_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  1 - 10 of 14
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
