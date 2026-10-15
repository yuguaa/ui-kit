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
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Renewals command data grid
      </h1>
      <Card className="gap-0 p-0 w-full" size="default">
        <CardHeader className="border-b flex flex-row gap-4 items-center justify-between px-5 py-4">
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <CardTitle>
              Renewals Review
            </CardTitle>
            <CardDescription className="text-xs">
              6 due in 30d, 13 blocked, $3.3M ARR at risk.
            </CardDescription>
          </div>
          <CardAction className="self-center">
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New transaction
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-5 py-3">
            <div className="flex flex-1 flex-wrap gap-2 items-center min-w-0">
              <Filters>
                <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                  <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Account contains no value" ruleId="accountName-1" tabIndex="0" index="0">
                    <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Account">
                      <svg className="lucide lucide-building-2 lucide-building2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                      <span className="flex items-center">
                        <span>
                          Account
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
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Account filter options" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
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
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal filters" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
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
                Clear filters
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:justify-end">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Table settings" baseUiClickTrigger="" id="base-ui-_r_e_" aria-haspopup="dialog" aria-expanded="false">
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
            <DataGridScrollArea className="h-135" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="" overflowVertical="true">
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_f_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1327px"}} data-has-overflow-y="" data-overflow-y-end="">
                <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-y="" data-overflow-y-end="">
                  <DataGridTableViewport style={{width: "calc(1216px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridTable style={{"--header-select-size": "36", "--col-select-size": "36", "--header-account-size": "400", "--col-account-size": "400", "--header-renewalWindow-size": "150", "--col-renewalWindow-size": "150", "--header-arr-size": "150", "--col-arr-size": "150", "--header-health-size": "140", "--col-health-size": "140", "--header-stage-size": "168", "--col-stage-size": "168", "--header-risk-size": "116", "--col-risk-size": "116", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1216px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-account-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-arr-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-health-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-stage-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-risk-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead className="[&_tr]:bg-card sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_g_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="account" data-header-id="account" data-header-depth="0" style={{width: "calc(var(--header-account-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                Account
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="renewalWindow" data-header-id="renewalWindow" data-header-depth="0" style={{width: "calc(var(--header-renewalWindow-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                Renewal
                                <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="arr" data-header-id="arr" data-header-depth="0" style={{width: "calc(var(--header-arr-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                ARR
                                <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                  <path d="M12 5v14"></path>
                                  <path d="m19 12-7 7-7-7"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="health" data-header-id="health" data-header-depth="0" style={{width: "calc(var(--header-health-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
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
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="stage" data-header-id="stage" data-header-depth="0" style={{width: "calc(var(--header-stage-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
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
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="risk" data-header-id="risk" data-header-depth="0" style={{width: "calc(var(--header-risk-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                Risk
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1842">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1h_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Stripe
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-destructive">
                                Due in 7d
                              </span>
                              <span className="text-muted-foreground text-xs">
                                May 12, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $420,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$95,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="46" aria-valuetext="46%" role="progressbar" aria-labelledby="base-ui-_r_1k_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1k_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  46%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "46%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Legal review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Critical
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1837">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Supabase
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-destructive">
                                Due in 12d
                              </span>
                              <span className="text-muted-foreground text-xs">
                                May 17, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $365,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$120,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-labelledby="base-ui-_r_1u_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1u_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  58%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Commercial review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2100">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_25_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Stripe
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-warning">
                                Due in 21d
                              </span>
                              <span className="text-muted-foreground text-xs">
                                May 25, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $420,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$95,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="42" aria-valuetext="42%" role="progressbar" aria-labelledby="base-ui-_r_28_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_28_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  42%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "42%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Legal review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Critical
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_2c_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1831">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2f_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  OpenAI
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-warning">
                                Due in 24d
                              </span>
                              <span className="text-muted-foreground text-xs">
                                May 29, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $182,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$42,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="63" aria-valuetext="63%" role="progressbar" aria-labelledby="base-ui-_r_2i_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2i_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  63%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "63%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_2m_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2103">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2p_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Supabase
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-warning">
                                Due in 29d
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 2, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $376,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$120,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-labelledby="base-ui-_r_2s_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2s_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  58%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Commercial review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_30_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1828">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_33_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 19 19" fill="none">
                                    <path d="M18.367 7.28888V1.59755C18.367 0.986819 17.8715 0.5 17.2699 0.5H11.5812C10.6877 0.5 9.80295 0.677018 8.98017 1.01336C8.15738 1.35856 7.40539 1.85424 6.77724 2.49152L6.733 2.53578C5.90137 3.37664 5.30862 4.42108 5.00781 5.57174C5.54749 5.43012 6.10483 5.35931 6.6622 5.35046C8.14852 5.33276 9.60831 5.81073 10.7938 6.7047C11.8643 7.50131 12.6783 8.59885 13.1206 9.86458C13.5807 11.148 13.6337 12.5465 13.2887 13.8653C14.43 13.5644 15.4828 12.9714 16.3233 12.1393L16.3675 12.0951C16.9957 11.4667 17.4999 10.7143 17.845 9.89114C18.19 9.06797 18.3581 8.18285 18.3581 7.28888H18.367Z" fill="#18E299"></path>
                                    <path d="M4.83793 7.193C4.84674 5.44706 5.54303 3.77167 6.76814 2.51953L2.03511 7.25472C2.01749 7.27236 1.99985 7.28117 1.98222 7.29881C0.827615 8.44513 0.131342 9.97945 0.0167623 11.6019C-0.0890033 13.1186 0.307609 14.6176 1.15373 15.8698C1.23444 15.9892 1.45343 16.0285 1.57682 15.9139L4.47656 13.0216C5.38438 12.1134 5.66643 10.7642 5.23455 9.55618C4.96132 8.80666 4.82912 8.00424 4.83793 7.193Z" fill="#0C8C5E"></path>
                                    <path d="M16.341 12.0938C15.4332 12.9844 14.2962 13.6016 13.0623 13.875C11.8195 14.1483 10.5327 14.0689 9.33405 13.6457C9.33405 13.6457 9.32522 13.6457 9.31641 13.6457C8.10892 13.2136 6.76042 13.4958 5.8526 14.3952L2.95282 17.2875C2.82943 17.4109 2.84706 17.6137 2.99689 17.7107C4.24845 18.5484 5.74683 18.954 7.26281 18.8482C8.88455 18.7336 10.4093 18.037 11.5639 16.8818L11.608 16.8378L16.341 12.1026V12.0938Z" fill="#0C8C5E"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Mintlify
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Omar Haddad
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-warning">
                                Due in 30d
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 4, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $148,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$86,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="74" aria-valuetext="74%" role="progressbar" aria-labelledby="base-ui-_r_36_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_36_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  74%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "74%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_3a_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1822">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3d_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Anthropic
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                37d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 11, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $515,000
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                $0 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="54" aria-valuetext="54%" role="progressbar" aria-labelledby="base-ui-_r_3g_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_3g_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  54%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "54%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Commercial review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_3k_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2106">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3n_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  OpenAI
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                44d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 17, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $193,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$42,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" aria-valuetext="67%" role="progressbar" aria-labelledby="base-ui-_r_3q_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_3q_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  67%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "67%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_3u_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2109">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_41_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 19 19" fill="none">
                                    <path d="M18.367 7.28888V1.59755C18.367 0.986819 17.8715 0.5 17.2699 0.5H11.5812C10.6877 0.5 9.80295 0.677018 8.98017 1.01336C8.15738 1.35856 7.40539 1.85424 6.77724 2.49152L6.733 2.53578C5.90137 3.37664 5.30862 4.42108 5.00781 5.57174C5.54749 5.43012 6.10483 5.35931 6.6622 5.35046C8.14852 5.33276 9.60831 5.81073 10.7938 6.7047C11.8643 7.50131 12.6783 8.59885 13.1206 9.86458C13.5807 11.148 13.6337 12.5465 13.2887 13.8653C14.43 13.5644 15.4828 12.9714 16.3233 12.1393L16.3675 12.0951C16.9957 11.4667 17.4999 10.7143 17.845 9.89114C18.19 9.06797 18.3581 8.18285 18.3581 7.28888H18.367Z" fill="#18E299"></path>
                                    <path d="M4.83793 7.193C4.84674 5.44706 5.54303 3.77167 6.76814 2.51953L2.03511 7.25472C2.01749 7.27236 1.99985 7.28117 1.98222 7.29881C0.827615 8.44513 0.131342 9.97945 0.0167623 11.6019C-0.0890033 13.1186 0.307609 14.6176 1.15373 15.8698C1.23444 15.9892 1.45343 16.0285 1.57682 15.9139L4.47656 13.0216C5.38438 12.1134 5.66643 10.7642 5.23455 9.55618C4.96132 8.80666 4.82912 8.00424 4.83793 7.193Z" fill="#0C8C5E"></path>
                                    <path d="M16.341 12.0938C15.4332 12.9844 14.2962 13.6016 13.0623 13.875C11.8195 14.1483 10.5327 14.0689 9.33405 13.6457C9.33405 13.6457 9.32522 13.6457 9.31641 13.6457C8.10892 13.2136 6.76042 13.4958 5.8526 14.3952L2.95282 17.2875C2.82943 17.4109 2.84706 17.6137 2.99689 17.7107C4.24845 18.5484 5.74683 18.954 7.26281 18.8482C8.88455 18.7336 10.4093 18.037 11.5639 16.8818L11.608 16.8378L16.341 12.1026V12.0938Z" fill="#0C8C5E"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Mintlify
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                44d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 17, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $161,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$98,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar" aria-labelledby="base-ui-_r_44_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_44_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  82%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_48_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1819">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4b_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="28 28 128 132" fill="none">
                                    <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                                    <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                                    <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Convex
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                44d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 18, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $92,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$18,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="71" aria-valuetext="71%" role="progressbar" aria-labelledby="base-ui-_r_4e_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_4e_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  71%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "71%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_4i_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1814">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4l_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Neon
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                52d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 26, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $206,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$112,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" aria-valuetext="67%" role="progressbar" aria-labelledby="base-ui-_r_4o_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_4o_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  67%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "67%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Commercial review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_4s_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2112">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4v_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Anthropic
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                54d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jun 27, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $515,000
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                $0 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="46" aria-valuetext="46%" role="progressbar" aria-labelledby="base-ui-_r_52_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_52_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  46%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "46%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Legal review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Critical
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_56_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1810">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_59_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  PlanetScale
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                58d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 2, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $438,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$64,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-labelledby="base-ui-_r_5c_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5c_" role="presentation">
                                  Health score
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
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_5g_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1806">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5j_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Prisma
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Omar Haddad
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                64d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 8, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $124,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$52,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="77" aria-valuetext="77%" role="progressbar" aria-labelledby="base-ui-_r_5m_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5m_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  77%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "77%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_5q_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2115">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5t_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="28 28 128 132" fill="none">
                                    <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                                    <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                                    <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Convex
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                64d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 7, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $95,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$18,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" aria-valuetext="67%" role="progressbar" aria-labelledby="base-ui-_r_60_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_60_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  67%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "67%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_64_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2118">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_67_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Neon
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Omar Haddad
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                66d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 9, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $218,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$112,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" aria-valuetext="67%" role="progressbar" aria-labelledby="base-ui-_r_6a_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_6a_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  67%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "67%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_6e_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1801">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6h_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Resend
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                69d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 13, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $164,000
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                $0 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="52" aria-valuetext="52%" role="progressbar" aria-labelledby="base-ui-_r_6k_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_6k_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  52%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "52%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Commercial review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              High
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_6o_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1798">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
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
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Slack
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                74d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 18, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $88,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$24,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="69" aria-valuetext="69%" role="progressbar" aria-labelledby="base-ui-_r_6u_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_6u_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  69%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "69%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_72_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2121">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_75_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  PlanetScale
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                75d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 18, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $477,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$73,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" aria-valuetext="85%" role="progressbar" aria-labelledby="base-ui-_r_78_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_78_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  85%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "85%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_7c_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1794">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_7f_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <defs>
                                      <lineargradient id="_r_7i_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
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
                                    <path fill="url(#_r_7i_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                    <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Zoom
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                80d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 24, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $212,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$135,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-labelledby="base-ui-_r_7j_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_7j_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  83%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_7n_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2127">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_7q_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Resend
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                83d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 26, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $169,000
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                $0 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="44" aria-valuetext="44%" role="progressbar" aria-labelledby="base-ui-_r_7t_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_7t_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  44%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "44%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Legal review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Critical
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_81_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2124">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_84_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
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
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Prisma
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                84d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 27, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $124,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$59,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" aria-valuetext="85%" role="progressbar" aria-labelledby="base-ui-_r_87_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_87_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  85%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "85%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_8b_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1791">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_8e_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 330">
                                    <path d="M134.129.029c.876-.113 1.65.108 2.319.662a1256.253 1256.253 0 0 1 69.573 93.427c16.094 24.231 29.788 49.851 41.082 76.862 18.037 48.108 8.65 89.963-28.16 125.564-32.209 27.22-69.314 37.822-111.318 31.805-50.208-10.237-84.332-39.28-102.373-87.133C.553 225.638-.993 209.736.614 193.51c2.676-27.93 9.302-54.877 19.878-80.838 4.407-10.592 10.15-20.31 17.228-29.154a381.88 381.88 0 0 1 16.565 21.203c2.44 2.55 4.98 4.98 7.62 7.289C82.06 72.01 106.135 34.685 134.13.029Z" fill="#FF5B11" opacity=".993"></path>
                                    <path d="M129.49 53.7c24.314 28.2 46.29 58.238 65.93 90.114a187.318 187.318 0 0 1 15.24 33.13c8.338 32.804-.607 59.86-26.836 81.169-25.367 17.85-53.196 23.15-83.488 15.902-32.666-10.136-51.55-32.113-56.653-65.929-1.238-10.662-.133-21.043 3.314-31.142a225.41 225.41 0 0 1 17.89-35.78l19.878-29.155a5509.508 5509.508 0 0 0 44.726-58.31Z" fill="#FF9758"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Hono
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                87d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Jul 31, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $610,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$180,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="79" aria-valuetext="79%" role="progressbar" aria-labelledby="base-ui-_r_8h_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8h_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  79%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "79%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Commercial review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_8l_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2130">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_8o_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
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
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Slack
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                91d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 3, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $93,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$24,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" aria-valuetext="65%" role="progressbar" aria-labelledby="base-ui-_r_8r_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8r_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  65%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "65%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_8v_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1787">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_92_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <span className="dark:hidden" aria-hidden="true">
                                    <svg className="size-5" viewBox="0 0 256 297">
                                      <path d="M141.675 0C218.047 0 256 36.35 256 94.414c0 43.43-26.707 71.753-62.785 76.474 30.455 6.137 48.259 23.604 51.54 58.065l.474 6.337.415 5.924.358 5.542.249 4.179.267 4.93.138 2.814.198 4.47.159 4.222.079 2.427.107 3.888.092 4.446.033 2.148.06 6.226.02 6.496v3.885h-78.758l.004-1.62.028-3.147.047-3.065.136-7.424.035-2.489.027-3.902-.004-2.496-.023-2.617-.032-2.054-.064-2.876-.094-3.05-.125-3.242-.16-3.455-.096-1.813-.16-2.833-.186-2.976-.287-4.204-.247-3.342a116.56 116.56 0 0 0-.247-3.02l-.202-1.934c-2.6-22.827-11.655-32.157-27.163-35.269l-1.307-.245a60.184 60.184 0 0 0-2.704-.408l-1.397-.164c-.236-.025-.472-.05-.71-.073l-1.442-.127-1.471-.103-1.502-.081-1.514-.058-1.544-.039-1.574-.018L0 198.74V136.9h127.62c2.086 0 4.108-.04 6.066-.12l1.936-.095 1.893-.122 1.85-.15c.305-.028.608-.056.909-.086l1.785-.193a86.3 86.3 0 0 0 3.442-.475l1.657-.28c20.709-3.755 31.063-14.749 31.063-36.2 0-24.075-16.867-38.666-50.602-38.666H0V0h141.675ZM83.276 250.785c10.333 0 14.657 5.738 16.197 11.23l.203.79.167.782.109.617.046.306.078.603.058.59.023.29.031.569.01.278.008.54v29.507H0v-46.102h83.276Z" fill="#121212"></path>
                                    </svg>
                                  </span>
                                  <span className="dark:block hidden" aria-hidden="true">
                                    <svg className="size-5" viewBox="0 0 256 297">
                                      <path d="M141.675 0C218.047 0 256 36.35 256 94.414c0 43.43-26.707 71.753-62.785 76.474 30.455 6.137 48.259 23.604 51.54 58.065l.474 6.337.415 5.924.358 5.542.249 4.179.267 4.93.138 2.814.198 4.47.159 4.222.079 2.427.107 3.888.092 4.446.033 2.148.06 6.226.02 6.496v3.885h-78.758l.004-1.62.028-3.147.047-3.065.136-7.424.035-2.489.027-3.902-.004-2.496-.023-2.617-.032-2.054-.064-2.876-.094-3.05-.125-3.242-.16-3.455-.096-1.813-.16-2.833-.186-2.976-.287-4.204-.247-3.342a116.56 116.56 0 0 0-.247-3.02l-.202-1.934c-2.6-22.827-11.655-32.157-27.163-35.269l-1.307-.245a60.184 60.184 0 0 0-2.704-.408l-1.397-.164c-.236-.025-.472-.05-.71-.073l-1.442-.127-1.471-.103-1.502-.081-1.514-.058-1.544-.039-1.574-.018L0 198.74V136.9h127.62c2.086 0 4.108-.04 6.066-.12l1.936-.095 1.893-.122 1.85-.15c.305-.028.608-.056.909-.086l1.785-.193a86.3 86.3 0 0 0 3.442-.475l1.657-.28c20.709-3.755 31.063-14.749 31.063-36.2 0-24.075-16.867-38.666-50.602-38.666H0V0h141.675ZM83.276 250.785c10.333 0 14.657 5.738 16.197 11.23l.203.79.167.782.109.617.046.306.078.603.058.59.023.29.031.569.01.278.008.54v29.507H0v-46.102h83.276Z" fill="#ffff"></path>
                                    </svg>
                                  </span>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Remix
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Omar Haddad
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                92d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 5, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $76,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$21,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" aria-valuetext="72%" role="progressbar" aria-labelledby="base-ui-_r_95_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_95_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  72%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "72%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_99_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1783">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9c_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 39 39" fill="none">
                                    <path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="#81ADEC"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Paper
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                98d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 11, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $154,000
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                $0 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="57" aria-valuetext="57%" role="progressbar" aria-labelledby="base-ui-_r_9f_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_9f_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  57%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "57%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_9j_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2133">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9m_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <defs>
                                      <lineargradient id="_r_9p_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
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
                                    <path fill="url(#_r_9p_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                    <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Zoom
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Omar Haddad
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                100d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 12, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $231,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$154,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-labelledby="base-ui-_r_9q_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_9q_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  83%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_9u_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2136">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_a1_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 330">
                                    <path d="M134.129.029c.876-.113 1.65.108 2.319.662a1256.253 1256.253 0 0 1 69.573 93.427c16.094 24.231 29.788 49.851 41.082 76.862 18.037 48.108 8.65 89.963-28.16 125.564-32.209 27.22-69.314 37.822-111.318 31.805-50.208-10.237-84.332-39.28-102.373-87.133C.553 225.638-.993 209.736.614 193.51c2.676-27.93 9.302-54.877 19.878-80.838 4.407-10.592 10.15-20.31 17.228-29.154a381.88 381.88 0 0 1 16.565 21.203c2.44 2.55 4.98 4.98 7.62 7.289C82.06 72.01 106.135 34.685 134.13.029Z" fill="#FF5B11" opacity=".993"></path>
                                    <path d="M129.49 53.7c24.314 28.2 46.29 58.238 65.93 90.114a187.318 187.318 0 0 1 15.24 33.13c8.338 32.804-.607 59.86-26.836 81.169-25.367 17.85-53.196 23.15-83.488 15.902-32.666-10.136-51.55-32.113-56.653-65.929-1.238-10.662-.133-21.043 3.314-31.142a225.41 225.41 0 0 1 17.89-35.78l19.878-29.155a5509.508 5509.508 0 0 0 44.726-58.31Z" fill="#FF9758"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Hono
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                101d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 13, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $610,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$205,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-labelledby="base-ui-_r_a4_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_a4_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  83%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_a8_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1778">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_ab_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 228 120">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  n8n
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                107d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 20, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $448,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$132,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" aria-valuetext="85%" role="progressbar" aria-labelledby="base-ui-_r_ae_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_ae_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  85%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "85%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_ai_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2139">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_al_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <span className="dark:hidden" aria-hidden="true">
                                    <svg className="size-5" viewBox="0 0 256 297">
                                      <path d="M141.675 0C218.047 0 256 36.35 256 94.414c0 43.43-26.707 71.753-62.785 76.474 30.455 6.137 48.259 23.604 51.54 58.065l.474 6.337.415 5.924.358 5.542.249 4.179.267 4.93.138 2.814.198 4.47.159 4.222.079 2.427.107 3.888.092 4.446.033 2.148.06 6.226.02 6.496v3.885h-78.758l.004-1.62.028-3.147.047-3.065.136-7.424.035-2.489.027-3.902-.004-2.496-.023-2.617-.032-2.054-.064-2.876-.094-3.05-.125-3.242-.16-3.455-.096-1.813-.16-2.833-.186-2.976-.287-4.204-.247-3.342a116.56 116.56 0 0 0-.247-3.02l-.202-1.934c-2.6-22.827-11.655-32.157-27.163-35.269l-1.307-.245a60.184 60.184 0 0 0-2.704-.408l-1.397-.164c-.236-.025-.472-.05-.71-.073l-1.442-.127-1.471-.103-1.502-.081-1.514-.058-1.544-.039-1.574-.018L0 198.74V136.9h127.62c2.086 0 4.108-.04 6.066-.12l1.936-.095 1.893-.122 1.85-.15c.305-.028.608-.056.909-.086l1.785-.193a86.3 86.3 0 0 0 3.442-.475l1.657-.28c20.709-3.755 31.063-14.749 31.063-36.2 0-24.075-16.867-38.666-50.602-38.666H0V0h141.675ZM83.276 250.785c10.333 0 14.657 5.738 16.197 11.23l.203.79.167.782.109.617.046.306.078.603.058.59.023.29.031.569.01.278.008.54v29.507H0v-46.102h83.276Z" fill="#121212"></path>
                                    </svg>
                                  </span>
                                  <span className="dark:block hidden" aria-hidden="true">
                                    <svg className="size-5" viewBox="0 0 256 297">
                                      <path d="M141.675 0C218.047 0 256 36.35 256 94.414c0 43.43-26.707 71.753-62.785 76.474 30.455 6.137 48.259 23.604 51.54 58.065l.474 6.337.415 5.924.358 5.542.249 4.179.267 4.93.138 2.814.198 4.47.159 4.222.079 2.427.107 3.888.092 4.446.033 2.148.06 6.226.02 6.496v3.885h-78.758l.004-1.62.028-3.147.047-3.065.136-7.424.035-2.489.027-3.902-.004-2.496-.023-2.617-.032-2.054-.064-2.876-.094-3.05-.125-3.242-.16-3.455-.096-1.813-.16-2.833-.186-2.976-.287-4.204-.247-3.342a116.56 116.56 0 0 0-.247-3.02l-.202-1.934c-2.6-22.827-11.655-32.157-27.163-35.269l-1.307-.245a60.184 60.184 0 0 0-2.704-.408l-1.397-.164c-.236-.025-.472-.05-.71-.073l-1.442-.127-1.471-.103-1.502-.081-1.514-.058-1.544-.039-1.574-.018L0 198.74V136.9h127.62c2.086 0 4.108-.04 6.066-.12l1.936-.095 1.893-.122 1.85-.15c.305-.028.608-.056.909-.086l1.785-.193a86.3 86.3 0 0 0 3.442-.475l1.657-.28c20.709-3.755 31.063-14.749 31.063-36.2 0-24.075-16.867-38.666-50.602-38.666H0V0h141.675ZM83.276 250.785c10.333 0 14.657 5.738 16.197 11.23l.203.79.167.782.109.617.046.306.078.603.058.59.023.29.031.569.01.278.008.54v29.507H0v-46.102h83.276Z" fill="#ffff"></path>
                                    </svg>
                                  </span>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Remix
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                109d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 21, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $78,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$24,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" aria-valuetext="80%" role="progressbar" aria-labelledby="base-ui-_r_ao_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_ao_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  80%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "80%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_as_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1772">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_av_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5 text-foreground" viewBox="0 0 76 65" aria-hidden="true">
                                    <path fill="currentColor" d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Vercel
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                116d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 29, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $132,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$34,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" aria-labelledby="base-ui-_r_b2_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_b2_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  68%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_b6_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2142">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_b9_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 39 39" fill="none">
                                    <path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="#81ADEC"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Paper
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Priya Menon
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                118d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Aug 30, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $163,000
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                $0 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="49" aria-valuetext="49%" role="progressbar" aria-labelledby="base-ui-_r_bc_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_bc_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  49%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "49%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                At risk
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Legal review
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Critical
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_bg_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2145">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_bj_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 228 120">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  n8n
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Jonah Lee
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Scale
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                121d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Sep 2, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $488,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$150,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-labelledby="base-ui-_r_bm_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_bm_" role="presentation">
                                  Health score
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
                              <span className="text-muted-foreground text-xs">
                                Healthy
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              Low
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_bq_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-1768">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_bt_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                                    <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                                    <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                                    <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                                    <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Google Cloud
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nina Santos
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                127d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Sep 9, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $388,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$74,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="64" aria-valuetext="64%" role="progressbar" aria-labelledby="base-ui-_r_c0_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_c0_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  64%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "64%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_c4_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2148">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c7_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="shrink-0 size-5 text-foreground" viewBox="0 0 76 65" aria-hidden="true">
                                    <path fill="currentColor" d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Vercel
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Omar Haddad
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Mid-market
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                133d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Sep 14, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $132,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$34,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" aria-labelledby="base-ui-_r_ca_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_ca_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  68%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_ce_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REN-2151">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_ch_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-account-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-6" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                                    <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                                    <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                                    <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                                    <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <div className="font-medium text-foreground truncate">
                                  Google Cloud
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Maya Patel
                                  </span>
                                  <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Enterprise
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-renewalWindow-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                147d out
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Sep 28, 2026
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-arr-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                $400,000
                              </span>
                              <span className="dark:text-emerald-400 tabular-nums text-emerald-600 text-xs">
                                +$74,000 upside
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-health-size) * 1px)"}}>
                            <div className="flex flex-col gap-1 min-w-0">
                              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-14 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" aria-labelledby="base-ui-_r_ck_">
                                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_ck_" role="presentation">
                                  Health score
                                </ProgressLabel>
                                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                  68%
                                </ProgressValue>
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-xs">
                                Watchlist
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                              Preparing
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              Medium
                            </Badge>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renewal actions" aria-haspopup="menu" id="base-ui-_r_co_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
            <div className="absolute h-(--data-grid-scrollbar-track-height) inset-e-px pointer-events-none top-(--data-grid-scrollbar-header-height) z-20" aria-hidden="true" style={{"--data-grid-scrollbar-header-height": "32px", "--data-grid-scrollbar-thumb-height": "140.63433242506812px", "--data-grid-scrollbar-thumb-top": "0px", "--data-grid-scrollbar-track-height": "508px"}}>
              <div className="h-full p-px pointer-events-auto relative touch-none w-[var(--data-grid-scrollbar-size,0.625rem)]">
                <div className="absolute before:-inset-0.5 before:absolute bg-border end-px h-(--data-grid-scrollbar-thumb-height) rounded-full top-(--data-grid-scrollbar-thumb-top) w-[calc(var(--data-grid-scrollbar-size,0.625rem)-0.1875rem)]"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
