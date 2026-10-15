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
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
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
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-4 pt-8 sm:p-8 sm:pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Campaign performance analytics"}
      </h1>
      <Frame className="[--color-conversions:var(--color-blue-500)] w-full" spacing="default">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Campaign Performance"}
            </div>
            <div className="flex flex-wrap gap-x-1.5 items-center text-muted-foreground text-xs">
              <span className="tabular-nums">
                {"30 campaigns"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="tabular-nums">
                {"17 live in view"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"Sep 6 to Oct 5"}
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button type="button" tabIndex="0" aria-label="Export" extracted="1">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span className="max-sm:sr-only">
                {"Export"}
              </span>
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"New Campaign"}
            </Button>
          </div>
        </header>
        <FramePanel className="p-0">
          <div className="@container/kpis border-b">
            <dl className="@5xl/kpis:grid-cols-6 @xl/kpis:grid-cols-3 bg-border gap-px grid grid-cols-2">
              <div className="bg-card flex flex-col gap-1 min-w-0 px-(--frame-panel-header-px) py-3">
                <dt className="text-muted-foreground text-xs">
                  {"Spend"}
                </dt>
                <dd className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  {"$643.6K"}
                </dd>
                <dd className="flex items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  {"76% of $846K budget"}
                </dd>
              </div>
              <div className="bg-card flex flex-col gap-1 min-w-0 px-(--frame-panel-header-px) py-3">
                <dt className="text-muted-foreground text-xs">
                  {"Impressions"}
                </dt>
                <dd className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  {"43.6M"}
                </dd>
                <dd className="flex items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  {"2.2% CTR"}
                </dd>
              </div>
              <div className="bg-card flex flex-col gap-1 min-w-0 px-(--frame-panel-header-px) py-3">
                <dt className="text-muted-foreground text-xs">
                  {"Conversions"}
                </dt>
                <dd className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  {"27.8K"}
                </dd>
                <dd className="flex items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  <span className="tabular-nums text-destructive text-xs">
                    {"-6%"}
                  </span>
                </dd>
              </div>
              <div className="bg-card flex flex-col gap-1 min-w-0 px-(--frame-panel-header-px) py-3">
                <dt className="text-muted-foreground text-xs">
                  {"Blended CPA"}
                </dt>
                <dd className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  {"$23.13"}
                </dd>
                <dd className="flex items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  <span className="tabular-nums text-destructive text-xs">
                    {"+3.1%"}
                  </span>
                </dd>
              </div>
              <div className="bg-card flex flex-col gap-1 min-w-0 px-(--frame-panel-header-px) py-3">
                <dt className="text-muted-foreground text-xs">
                  {"Blended ROAS"}
                </dt>
                <dd className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  {"5.0x"}
                </dd>
                <dd className="flex items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  {"Target 4.3x"}
                </dd>
              </div>
              <div className="bg-card flex flex-col gap-1 min-w-0 px-(--frame-panel-header-px) py-3">
                <dt className="text-muted-foreground text-xs">
                  {"Below Target"}
                </dt>
                <dd className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  {"21"}
                </dd>
                <dd className="flex items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  {"of 30 campaigns"}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-wrap gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <InputGroup className="sm:w-72" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search campaign, ID, market..." aria-label="Search campaigns" value="" />
            </InputGroup>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                <path d="M2 5h20"></path>
                <path d="M6 12h12"></path>
                <path d="M9 19h6"></path>
              </svg>
              <span className="max-sm:sr-only">
                {"Filter"}
              </span>
            </PopoverTrigger>
            </Popover>
            <div className="flex gap-2 items-center ms-auto shrink-0">
              <CascaderTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 style-luma:[&_svg:not([class*='size-'])]:size-4 style-lyra:[&_svg:not([class*='size-'])]:size-4 style-maia:[&_svg:not([class*='size-'])]:size-4 style-mira:[&_svg:not([class*='size-'])]:size-3.5 style-nova:[&_svg:not([class*='size-'])]:size-4 style-rhea:[&_svg:not([class*='size-'])]:size-4 style-sera:[&_svg:not([class*='size-'])]:size-3.5 style-vega:[&_svg:not([class*='size-'])]:size-4 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="dialog" aria-label="Columns">
                <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
                <span className="max-sm:sr-only">
                  {"Columns"}
                </span>
              </CascaderTrigger>
              <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Settings" baseUiClickTrigger="" id="base-ui-_r_a_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="max-sm:sr-only">
                  {"Settings"}
                </span>
              </PopoverTrigger>
              </Popover>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_b_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1214px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-select-size": "49", "--col-select-size": "49", "--header-campaign-size": "285", "--col-campaign-size": "285", "--header-status-size": "88", "--col-status-size": "88", "--header-spend-size": "116", "--col-spend-size": "116", "--header-conversions-size": "128", "--col-conversions-size": "128", "--header-trend-size": "120", "--col-trend-size": "120", "--header-cpa-size": "112", "--col-cpa-size": "112", "--header-roas-size": "128", "--col-roas-size": "128", "--header-newBuyers-size": "128", "--col-newBuyers-size": "128", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1214px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-campaign-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-spend-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-conversions-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-trend-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-cpa-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-roas-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-newBuyers-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" data-last-col="start" style={{top: "0px", width: "calc(var(--header-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="campaign" data-header-id="campaign" data-header-depth="0" style={{width: "calc(var(--header-campaign-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                {"Campaign"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                                {"Status"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="spend" data-header-id="spend" data-header-depth="0" style={{width: "calc(var(--header-spend-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                  {"Spend"}
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="conversions" data-header-id="conversions" data-header-depth="0" style={{width: "calc(var(--header-conversions-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                  {"Conversions"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="trend" data-header-id="trend" data-header-depth="0" style={{width: "calc(var(--header-trend-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                {"Trend"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="cpa" data-header-id="cpa" data-header-depth="0" style={{width: "calc(var(--header-cpa-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                  {"CPA"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="roas" data-header-id="roas" data-header-depth="0" style={{width: "calc(var(--header-roas-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                  {"ROAS"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="newBuyers" data-header-id="newBuyers" data-header-depth="0" style={{width: "calc(var(--header-newBuyers-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                  {"New Buyers"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{top: "0px", width: "calc(var(--header-actions-size) * 1px)"}}>
                            <span className="sr-only">
                              {"Actions"}
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_x09qn">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1i_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg className="dark:hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                                <svg className="dark:block hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path fill="#fff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Glacier Gloves Price Drop, Apple Ads">
                                  {"Glacier Gloves Price Drop"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/br.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"BR"}
                                      </span>
                                      <span className="sr-only">
                                        {"Brazil"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Prospecting"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$66.1K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"85% of $77.5K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"2,443"}
                              </span>
                              <span className="tabular-nums text-destructive text-xs">
                                {"-11.3%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, down 11.3%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_1l_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts1-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4h_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4h_" d="M1,22.241C2.057,21.121,3.115,20,4.172,18.931C5.23,17.862,6.287,16.552,7.345,15.828C8.402,15.103,9.46,15.414,10.517,14.586C11.575,13.759,12.632,4.034,13.69,4.034C14.747,4.034,15.805,8.69,16.862,10.034C17.92,11.379,18.977,12.103,20.034,12.103C21.092,12.103,22.149,11.586,23.207,11.069C24.264,10.552,25.322,9.724,26.379,9C27.437,8.276,28.494,7.414,29.552,6.724C30.609,6.034,31.667,4.862,32.724,4.862C33.782,4.862,34.839,6.828,35.897,7.552C36.954,8.276,38.011,8.621,39.069,9.207C40.126,9.793,41.184,11.069,42.241,11.069C43.299,11.069,44.356,3.414,45.414,3.414C46.471,3.414,47.529,9.414,48.586,9.828C49.644,10.241,50.701,10.448,51.759,10.448C52.816,10.448,53.874,3,54.931,3C55.989,3,57.046,3.759,58.103,5.276C59.161,6.793,60.218,12.103,61.276,12.103C62.333,12.103,63.391,11.483,64.448,11.483C65.506,11.483,66.563,12.31,67.621,12.31C68.678,12.31,69.736,3.966,70.793,3.828C71.851,3.69,72.908,3.621,73.966,3.621C75.023,3.621,76.08,10.931,77.138,11.897C78.195,12.862,79.253,13.207,80.31,13.345C81.368,13.483,82.425,13.552,83.483,13.552C84.54,13.552,85.598,12.103,86.655,12.103C87.713,12.103,88.77,12.931,89.828,12.931C90.885,12.931,91.943,10.552,93,8.172L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,22.241C2.057,21.121,3.115,20,4.172,18.931C5.23,17.862,6.287,16.552,7.345,15.828C8.402,15.103,9.46,15.414,10.517,14.586C11.575,13.759,12.632,4.034,13.69,4.034C14.747,4.034,15.805,8.69,16.862,10.034C17.92,11.379,18.977,12.103,20.034,12.103C21.092,12.103,22.149,11.586,23.207,11.069C24.264,10.552,25.322,9.724,26.379,9C27.437,8.276,28.494,7.414,29.552,6.724C30.609,6.034,31.667,4.862,32.724,4.862C33.782,4.862,34.839,6.828,35.897,7.552C36.954,8.276,38.011,8.621,39.069,9.207C40.126,9.793,41.184,11.069,42.241,11.069C43.299,11.069,44.356,3.414,45.414,3.414C46.471,3.414,47.529,9.414,48.586,9.828C49.644,10.241,50.701,10.448,51.759,10.448C52.816,10.448,53.874,3,54.931,3C55.989,3,57.046,3.759,58.103,5.276C59.161,6.793,60.218,12.103,61.276,12.103C62.333,12.103,63.391,11.483,64.448,11.483C65.506,11.483,66.563,12.31,67.621,12.31C68.678,12.31,69.736,3.966,70.793,3.828C71.851,3.69,72.908,3.621,73.966,3.621C75.023,3.621,76.08,10.931,77.138,11.897C78.195,12.862,79.253,13.207,80.31,13.345C81.368,13.483,82.425,13.552,83.483,13.552C84.54,13.552,85.598,12.103,86.655,12.103C87.713,12.103,88.77,12.931,89.828,12.931C90.885,12.931,91.943,10.552,93,8.172"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="91" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="8.17241379310345"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$27.05"}
                              </span>
                              <span className="tabular-nums text-destructive text-xs">
                                {"+23.2%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 4.3x against a 2.5x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="35.907736068872644" aria-valuetext="36%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "35.9077%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "11px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"4.3x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="88% new buyers, 12% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.881044", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.118956", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"88%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_x09qn" aria-label="Actions for Glacier Gloves Price Drop" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_iv0f8">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg className="dark:hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                                <svg className="dark:block hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path fill="#fff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Ember Stove Creator Cuts, Apple Ads">
                                  {"Ember Stove Creator Cuts"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/mx.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"MX"}
                                      </span>
                                      <span className="sr-only">
                                        {"Mexico"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Prospecting"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$62.5K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"95% of $66K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"2,799"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+36.1%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 36.1%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_1u_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts2-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4i_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4i_" d="M1,24.423C2.057,24.181,3.115,23.94,4.172,22.973C5.23,22.007,6.287,19.671,7.345,18.624C8.402,17.577,9.46,17.55,10.517,16.691C11.575,15.832,12.632,13.47,13.69,13.47C14.747,13.47,15.805,15.94,16.862,16.369C17.92,16.799,18.977,17.013,20.034,17.013C21.092,17.013,22.149,12.02,23.207,12.02C24.264,12.02,25.322,13.631,26.379,13.631C27.437,13.631,28.494,12.181,29.552,11.376C30.609,10.57,31.667,8.799,32.724,8.799C33.782,8.799,34.839,9.067,35.897,9.604C36.954,10.141,38.011,15.403,39.069,15.403C40.126,15.403,41.184,13.819,42.241,12.987C43.299,12.154,44.356,10.409,45.414,10.409C46.471,10.409,47.529,12.181,48.586,12.181C49.644,12.181,50.701,11.376,51.759,9.926C52.816,8.477,53.874,3.483,54.931,3.483C55.989,3.483,57.046,11.537,58.103,11.537C59.161,11.537,60.218,7.832,61.276,7.832C62.333,7.832,63.391,12.342,64.448,12.342C65.506,12.342,66.563,9.443,67.621,9.443C68.678,9.443,69.736,9.443,70.793,9.443C71.851,9.443,72.908,3,73.966,3C75.023,3,76.08,10.57,77.138,10.57C78.195,10.57,79.253,4.772,80.31,4.772C81.368,4.772,82.425,6.651,83.483,7.671C84.54,8.691,85.598,9.926,86.655,10.893C87.713,11.859,88.77,13.47,89.828,13.47C90.885,13.47,91.943,11.134,93,8.799L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,24.423C2.057,24.181,3.115,23.94,4.172,22.973C5.23,22.007,6.287,19.671,7.345,18.624C8.402,17.577,9.46,17.55,10.517,16.691C11.575,15.832,12.632,13.47,13.69,13.47C14.747,13.47,15.805,15.94,16.862,16.369C17.92,16.799,18.977,17.013,20.034,17.013C21.092,17.013,22.149,12.02,23.207,12.02C24.264,12.02,25.322,13.631,26.379,13.631C27.437,13.631,28.494,12.181,29.552,11.376C30.609,10.57,31.667,8.799,32.724,8.799C33.782,8.799,34.839,9.067,35.897,9.604C36.954,10.141,38.011,15.403,39.069,15.403C40.126,15.403,41.184,13.819,42.241,12.987C43.299,12.154,44.356,10.409,45.414,10.409C46.471,10.409,47.529,12.181,48.586,12.181C49.644,12.181,50.701,11.376,51.759,9.926C52.816,8.477,53.874,3.483,54.931,3.483C55.989,3.483,57.046,11.537,58.103,11.537C59.161,11.537,60.218,7.832,61.276,7.832C62.333,7.832,63.391,12.342,64.448,12.342C65.506,12.342,66.563,9.443,67.621,9.443C68.678,9.443,69.736,9.443,70.793,9.443C71.851,9.443,72.908,3,73.966,3C75.023,3,76.08,10.57,77.138,10.57C78.195,10.57,79.253,4.772,80.31,4.772C81.368,4.772,82.425,6.651,83.483,7.671C84.54,8.691,85.598,9.926,86.655,10.893C87.713,11.859,88.77,13.47,89.828,13.47C90.885,13.47,91.943,11.134,93,8.799"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="113" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="8.798657718120806"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$22.35"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-31.6%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 4.9x against a 2.5x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40.64107073387797" aria-valuetext="41%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40.6411%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "11px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"4.9x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="73% new buyers, 27% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.727775", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.272225", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"73%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_iv0f8" aria-label="Actions for Ember Stove Creator Cuts" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_nkrj1">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_24_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
                                  <defs>
                                    <lineargradient id="a">
                                      <stop offset="0" stopColor="#0fbc5c"></stop>
                                      <stop offset="1" stopColor="#0cba65"></stop>
                                    </lineargradient>
                                    <lineargradient id="g">
                                      <stop offset=".231" stopColor="#0fbc5f"></stop>
                                      <stop offset=".312" stopColor="#0fbc5f"></stop>
                                      <stop offset=".366" stopColor="#0fbc5e"></stop>
                                      <stop offset=".458" stopColor="#0fbc5d"></stop>
                                      <stop offset=".54" stopColor="#12bc58"></stop>
                                      <stop offset=".699" stopColor="#28bf3c"></stop>
                                      <stop offset=".771" stopColor="#38c02b"></stop>
                                      <stop offset=".861" stopColor="#52c218"></stop>
                                      <stop offset=".915" stopColor="#67c30f"></stop>
                                      <stop offset="1" stopColor="#86c504"></stop>
                                    </lineargradient>
                                    <lineargradient id="h">
                                      <stop offset=".142" stopColor="#1abd4d"></stop>
                                      <stop offset=".248" stopColor="#6ec30d"></stop>
                                      <stop offset=".312" stopColor="#8ac502"></stop>
                                      <stop offset=".366" stopColor="#a2c600"></stop>
                                      <stop offset=".446" stopColor="#c8c903"></stop>
                                      <stop offset=".54" stopColor="#ebcb03"></stop>
                                      <stop offset=".616" stopColor="#f7cd07"></stop>
                                      <stop offset=".699" stopColor="#fdcd04"></stop>
                                      <stop offset=".771" stopColor="#fdce05"></stop>
                                      <stop offset=".861" stopColor="#ffce0a"></stop>
                                    </lineargradient>
                                    <lineargradient id="f">
                                      <stop offset=".316" stopColor="#ff4c3c"></stop>
                                      <stop offset=".604" stopColor="#ff692c"></stop>
                                      <stop offset=".727" stopColor="#ff7825"></stop>
                                      <stop offset=".885" stopColor="#ff8d1b"></stop>
                                      <stop offset="1" stopColor="#ff9f13"></stop>
                                    </lineargradient>
                                    <lineargradient id="b">
                                      <stop offset=".231" stopColor="#ff4541"></stop>
                                      <stop offset=".312" stopColor="#ff4540"></stop>
                                      <stop offset=".458" stopColor="#ff4640"></stop>
                                      <stop offset=".54" stopColor="#ff473f"></stop>
                                      <stop offset=".699" stopColor="#ff5138"></stop>
                                      <stop offset=".771" stopColor="#ff5b33"></stop>
                                      <stop offset=".861" stopColor="#ff6c29"></stop>
                                      <stop offset="1" stopColor="#ff8c18"></stop>
                                    </lineargradient>
                                    <lineargradient id="d">
                                      <stop offset=".408" stopColor="#fb4e5a"></stop>
                                      <stop offset="1" stopColor="#ff4540"></stop>
                                    </lineargradient>
                                    <lineargradient id="c">
                                      <stop offset=".132" stopColor="#0cba65"></stop>
                                      <stop offset=".21" stopColor="#0bb86d"></stop>
                                      <stop offset=".297" stopColor="#09b479"></stop>
                                      <stop offset=".396" stopColor="#08ad93"></stop>
                                      <stop offset=".477" stopColor="#0aa6a9"></stop>
                                      <stop offset=".568" stopColor="#0d9cc6"></stop>
                                      <stop offset=".667" stopColor="#1893dd"></stop>
                                      <stop offset=".769" stopColor="#258bf1"></stop>
                                      <stop offset=".859" stopColor="#3086ff"></stop>
                                    </lineargradient>
                                    <lineargradient id="e">
                                      <stop offset=".366" stopColor="#ff4e3a"></stop>
                                      <stop offset=".458" stopColor="#ff8a1b"></stop>
                                      <stop offset=".54" stopColor="#ffa312"></stop>
                                      <stop offset=".616" stopColor="#ffb60c"></stop>
                                      <stop offset=".771" stopColor="#ffcd0a"></stop>
                                      <stop offset=".861" stopColor="#fecf0a"></stop>
                                      <stop offset=".915" stopColor="#fecf08"></stop>
                                      <stop offset="1" stopColor="#fdcd01"></stop>
                                    </lineargradient>
                                    <lineargradient xlinkHref="#a" id="s" x1="219.7" x2="254.467" y1="329.535" y2="329.535" gradientUnits="userSpaceOnUse"></lineargradient>
                                    <radialgradient xlinkHref="#b" id="m" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#c" id="n" cx="45.259" cy="279.274" r="71.46" fx="45.259" fy="279.274" gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#d" id="l" cx="304.017" cy="118.009" r="47.854" fx="304.017" fy="118.009" gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#e" id="o" cx="181.001" cy="177.201" r="71.46" fx="181.001" fy="177.201" gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#f" id="p" cx="207.673" cy="108.097" r="41.102" fx="207.673" fy="108.097" gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#g" id="r" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#h" id="j" cx="154.87" cy="145.969" r="71.46" fx="154.87" fy="145.969" gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <filter id="q" width="1.097" height="1.116" x="-.048" y="-.058" color-interpolation-filters="sRGB">
                                      <fegaussianblur stdDeviation="1.701"></fegaussianblur>
                                    </filter>
                                    <filter id="k" width="1.033" height="1.02" x="-.017" y="-.01" color-interpolation-filters="sRGB">
                                      <fegaussianblur stdDeviation=".242"></fegaussianblur>
                                    </filter>
                                    <clippath id="i" clippathunits="userSpaceOnUse">
                                      <path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z"></path>
                                    </clippath>
                                  </defs>
                                  <g clipPath="url(#i)" transform="matrix(.95792 0 0 .98525 -90.174 -78.856)">
                                    <path fill="url(#j)" d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z" filter="url(#k)"></path>
                                    <path fill="url(#l)" d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z" filter="url(#k)"></path>
                                    <path fill="url(#m)" d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z" filter="url(#k)"></path>
                                    <path fill="url(#n)" d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z" filter="url(#k)"></path>
                                    <path fill="#3086ff" d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z" filter="url(#k)"></path>
                                    <path fill="url(#o)" d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z" filter="url(#k)"></path>
                                    <path fill="url(#p)" d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z" filter="url(#q)"></path>
                                    <path fill="url(#r)" d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z" filter="url(#k)"></path>
                                    <path fill="url(#s)" d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z" filter="url(#k)" opacity=".5"></path>
                                  </g>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Meadow Hammock Evergreen, Google Search">
                                  {"Meadow Hammock Evergreen"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/fr.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"FR"}
                                      </span>
                                      <span className="sr-only">
                                        {"France"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Retargeting"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"Limited"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$52.4K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"99% of $53K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"5,321"}
                              </span>
                              <span className="tabular-nums text-destructive text-xs">
                                {"-37.9%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, down 37.9%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_27_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts3-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4j_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4j_" d="M1,23.88C2.057,22.94,3.115,22,4.172,20.36C5.23,18.72,6.287,14.04,7.345,14.04C8.402,14.04,9.46,14.2,10.517,14.2C11.575,14.2,12.632,3,13.69,3C14.747,3,15.805,10.6,16.862,10.6C17.92,10.6,18.977,10.12,20.034,10.12C21.092,10.12,22.149,11.48,23.207,11.48C24.264,11.48,25.322,10.4,26.379,10.04C27.437,9.68,28.494,9.32,29.552,9.32C30.609,9.32,31.667,12.36,32.724,12.36C33.782,12.36,34.839,4.92,35.897,4.92C36.954,4.92,38.011,13.64,39.069,14.28C40.126,14.92,41.184,15.24,42.241,15.24C43.299,15.24,44.356,14.093,45.414,13.24C46.471,12.387,47.529,10.947,48.586,10.12C49.644,9.293,50.701,8.28,51.759,8.28C52.816,8.28,53.874,13,54.931,13C55.989,13,57.046,11.96,58.103,11.96C59.161,11.96,60.218,12.253,61.276,12.84C62.333,13.427,63.391,17.56,64.448,17.56C65.506,17.56,66.563,17.187,67.621,16.44C68.678,15.693,69.736,11.88,70.793,11.88C71.851,11.88,72.908,13.72,73.966,13.72C75.023,13.72,76.08,10.387,77.138,10.28C78.195,10.173,79.253,10.12,80.31,10.12C81.368,10.12,82.425,10.227,83.483,10.44C84.54,10.653,85.598,15.48,86.655,16.12C87.713,16.76,88.77,16.867,89.828,17.08C90.885,17.293,91.943,17.347,93,17.4L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,23.88C2.057,22.94,3.115,22,4.172,20.36C5.23,18.72,6.287,14.04,7.345,14.04C8.402,14.04,9.46,14.2,10.517,14.2C11.575,14.2,12.632,3,13.69,3C14.747,3,15.805,10.6,16.862,10.6C17.92,10.6,18.977,10.12,20.034,10.12C21.092,10.12,22.149,11.48,23.207,11.48C24.264,11.48,25.322,10.4,26.379,10.04C27.437,9.68,28.494,9.32,29.552,9.32C30.609,9.32,31.667,12.36,32.724,12.36C33.782,12.36,34.839,4.92,35.897,4.92C36.954,4.92,38.011,13.64,39.069,14.28C40.126,14.92,41.184,15.24,42.241,15.24C43.299,15.24,44.356,14.093,45.414,13.24C46.471,12.387,47.529,10.947,48.586,10.12C49.644,9.293,50.701,8.28,51.759,8.28C52.816,8.28,53.874,13,54.931,13C55.989,13,57.046,11.96,58.103,11.96C59.161,11.96,60.218,12.253,61.276,12.84C62.333,13.427,63.391,17.56,64.448,17.56C65.506,17.56,66.563,17.187,67.621,16.44C68.678,15.693,69.736,11.88,70.793,11.88C71.851,11.88,72.908,13.72,73.966,13.72C75.023,13.72,76.08,10.387,77.138,10.28C78.195,10.173,79.253,10.12,80.31,10.12C81.368,10.12,82.425,10.227,83.483,10.44C84.54,10.653,85.598,15.48,86.655,16.12C87.713,16.76,88.77,16.867,89.828,17.08C90.885,17.293,91.943,17.347,93,17.4"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="120" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="17.4"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$9.86"}
                              </span>
                              <span className="tabular-nums text-destructive text-xs">
                                {"+43.4%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 11.7x against a 6.0x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="97.27519180285145" aria-valuetext="97%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "97.2752%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "27px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"11.7x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="15% new buyers, 85% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.150852", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.849148", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"15%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_nkrj1" aria-label="Actions for Meadow Hammock Evergreen" aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_e59bf">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2d_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                  <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Harbor Duffel Creator Cuts, Spotify">
                                  {"Harbor Duffel Creator Cuts"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/br.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"BR"}
                                      </span>
                                      <span className="sr-only">
                                        {"Brazil"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Prospecting"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$50K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"93% of $53.5K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"663"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+25.8%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 25.8%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_2g_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts4-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4k_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4k_" d="M1,24.176C2.057,23.471,3.115,22.765,4.172,22.059C5.23,21.353,6.287,21.118,7.345,19.941C8.402,18.765,9.46,16.294,10.517,15C11.575,13.706,12.632,12.176,13.69,12.176C14.747,12.176,15.805,15.706,16.862,15.706C17.92,15.706,18.977,13.588,20.034,13.588C21.092,13.588,22.149,15,23.207,15C24.264,15,25.322,11.706,26.379,10.765C27.437,9.824,28.494,9.706,29.552,9.353C30.609,9,31.667,8.647,32.724,8.647C33.782,8.647,34.839,9.353,35.897,9.353C36.954,9.353,38.011,7.941,39.069,7.941C40.126,7.941,41.184,8.176,42.241,8.647C43.299,9.118,44.356,14.294,45.414,14.294C46.471,14.294,47.529,10.059,48.586,10.059C49.644,10.059,50.701,10.059,51.759,10.059C52.816,10.059,53.874,10.765,54.931,10.765C55.989,10.765,57.046,3.706,58.103,3.706C59.161,3.706,60.218,11.471,61.276,11.471C62.333,11.471,63.391,8.647,64.448,8.647C65.506,8.647,66.563,14.294,67.621,14.294C68.678,14.294,69.736,10.765,70.793,10.765C71.851,10.765,72.908,10.765,73.966,10.765C75.023,10.765,76.08,5.353,77.138,4.412C78.195,3.471,79.253,3,80.31,3C81.368,3,82.425,5.118,83.483,6.529C84.54,7.941,85.598,11.471,86.655,11.471C87.713,11.471,88.77,9.353,89.828,9.353C90.885,9.353,91.943,9.706,93,10.059L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,24.176C2.057,23.471,3.115,22.765,4.172,22.059C5.23,21.353,6.287,21.118,7.345,19.941C8.402,18.765,9.46,16.294,10.517,15C11.575,13.706,12.632,12.176,13.69,12.176C14.747,12.176,15.805,15.706,16.862,15.706C17.92,15.706,18.977,13.588,20.034,13.588C21.092,13.588,22.149,15,23.207,15C24.264,15,25.322,11.706,26.379,10.765C27.437,9.824,28.494,9.706,29.552,9.353C30.609,9,31.667,8.647,32.724,8.647C33.782,8.647,34.839,9.353,35.897,9.353C36.954,9.353,38.011,7.941,39.069,7.941C40.126,7.941,41.184,8.176,42.241,8.647C43.299,9.118,44.356,14.294,45.414,14.294C46.471,14.294,47.529,10.059,48.586,10.059C49.644,10.059,50.701,10.059,51.759,10.059C52.816,10.059,53.874,10.765,54.931,10.765C55.989,10.765,57.046,3.706,58.103,3.706C59.161,3.706,60.218,11.471,61.276,11.471C62.333,11.471,63.391,8.647,64.448,8.647C65.506,8.647,66.563,14.294,67.621,14.294C68.678,14.294,69.736,10.765,70.793,10.765C71.851,10.765,72.908,10.765,73.966,10.765C75.023,10.765,76.08,5.353,77.138,4.412C78.195,3.471,79.253,3,80.31,3C81.368,3,82.425,5.118,83.483,6.529C84.54,7.941,85.598,11.471,86.655,11.471C87.713,11.471,88.77,9.353,89.828,9.353C90.885,9.353,91.943,9.706,93,10.059"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="24" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="10.058823529411763"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$75.38"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-31.3%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 2.0x against a 2.5x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="16.381184882805723" aria-valuetext="16%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "16.3812%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "11px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"2.0x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="71% new buyers, 29% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.70979", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.29021", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"71%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_e59bf" aria-label="Actions for Harbor Duffel Creator Cuts" aria-haspopup="menu" id="base-ui-_r_2k_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_squ2d">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2m_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 180">
                                  <path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"></path>
                                  <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Coastline Shell Creator Cuts, YouTube">
                                  {"Coastline Shell Creator Cuts"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"US"}
                                      </span>
                                      <span className="sr-only">
                                        {"United States"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Retargeting"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$40K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"77% of $52K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"1,585"}
                              </span>
                              <span className="tabular-nums text-destructive text-xs">
                                {"-6.2%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, down 6.2%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_2p_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts5-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4l_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4l_" d="M1,22C2.057,21.167,3.115,20.333,4.172,19.667C5.23,19,6.287,19.111,7.345,18C8.402,16.889,9.46,11.556,10.517,10C11.575,8.444,12.632,8.444,13.69,7.667C14.747,6.889,15.805,5.333,16.862,5.333C17.92,5.333,18.977,8.778,20.034,9C21.092,9.222,22.149,9.111,23.207,9.333C24.264,9.556,25.322,10.333,26.379,10.333C27.437,10.333,28.494,10,29.552,9.333C30.609,8.667,31.667,6,32.724,6C33.782,6,34.839,13,35.897,13C36.954,13,38.011,4.667,39.069,4.667C40.126,4.667,41.184,6.444,42.241,7C43.299,7.556,44.356,7.667,45.414,8C46.471,8.333,47.529,8.667,48.586,9C49.644,9.333,50.701,9.667,51.759,10C52.816,10.333,53.874,11,54.931,11C55.989,11,57.046,7.333,58.103,6.667C59.161,6,60.218,5.667,61.276,5.667C62.333,5.667,63.391,5.667,64.448,5.667C65.506,5.667,66.563,9.667,67.621,9.667C68.678,9.667,69.736,7.333,70.793,7.333C71.851,7.333,72.908,12.333,73.966,12.333C75.023,12.333,76.08,7.778,77.138,7.333C78.195,6.889,79.253,6.667,80.31,6.667C81.368,6.667,82.425,9.667,83.483,9.667C84.54,9.667,85.598,3,86.655,3C87.713,3,88.77,3.556,89.828,4.667C90.885,5.778,91.943,9.722,93,13.667L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,22C2.057,21.167,3.115,20.333,4.172,19.667C5.23,19,6.287,19.111,7.345,18C8.402,16.889,9.46,11.556,10.517,10C11.575,8.444,12.632,8.444,13.69,7.667C14.747,6.889,15.805,5.333,16.862,5.333C17.92,5.333,18.977,8.778,20.034,9C21.092,9.222,22.149,9.111,23.207,9.333C24.264,9.556,25.322,10.333,26.379,10.333C27.437,10.333,28.494,10,29.552,9.333C30.609,8.667,31.667,6,32.724,6C33.782,6,34.839,13,35.897,13C36.954,13,38.011,4.667,39.069,4.667C40.126,4.667,41.184,6.444,42.241,7C43.299,7.556,44.356,7.667,45.414,8C46.471,8.333,47.529,8.667,48.586,9C49.644,9.333,50.701,9.667,51.759,10C52.816,10.333,53.874,11,54.931,11C55.989,11,57.046,7.333,58.103,6.667C59.161,6,60.218,5.667,61.276,5.667C62.333,5.667,63.391,5.667,64.448,5.667C65.506,5.667,66.563,9.667,67.621,9.667C68.678,9.667,69.736,7.333,70.793,7.333C71.851,7.333,72.908,12.333,73.966,12.333C75.023,12.333,76.08,7.778,77.138,7.333C78.195,6.889,79.253,6.667,80.31,6.667C81.368,6.667,82.425,9.667,83.483,9.667C84.54,9.667,85.598,3,86.655,3C87.713,3,88.77,3.556,89.828,4.667C90.885,5.778,91.943,9.722,93,13.667"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="40" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="13.666666666666666"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$25.25"}
                              </span>
                              <span className="tabular-nums text-destructive text-xs">
                                {"+21.6%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 5.3x against a 6.0x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43.81913901106224" aria-valuetext="44%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "43.8191%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "27px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"5.3x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="11% new buyers, 89% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.112949", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.887051", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"11%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_squ2d" aria-label="Actions for Coastline Shell Creator Cuts" aria-haspopup="menu" id="base-ui-_r_2t_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_yqal3">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2v_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                  <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Alpine Fleece Launch, Spotify">
                                  {"Alpine Fleece Launch"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/br.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"BR"}
                                      </span>
                                      <span className="sr-only">
                                        {"Brazil"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Prospecting"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$34.7K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"95% of $36.5K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"182"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+37.9%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 37.9%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_32_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts6-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4m_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4m_" d="M1,24.333C2.057,23,3.115,21.667,4.172,21.667C5.23,21.667,6.287,21.667,7.345,21.667C8.402,21.667,9.46,18.556,10.517,16.333C11.575,14.111,12.632,8.333,13.69,8.333C14.747,8.333,15.805,11,16.862,11C17.92,11,18.977,8.333,20.034,8.333C21.092,8.333,22.149,12.333,23.207,13.667C24.264,15,25.322,16.333,26.379,16.333C27.437,16.333,28.494,11,29.552,11C30.609,11,31.667,13.667,32.724,13.667C33.782,13.667,34.839,10.111,35.897,8.333C36.954,6.556,38.011,3,39.069,3C40.126,3,41.184,8.333,42.241,8.333C43.299,8.333,44.356,8.333,45.414,8.333C46.471,8.333,47.529,13.667,48.586,13.667C49.644,13.667,50.701,13.667,51.759,13.667C52.816,13.667,53.874,10.111,54.931,8.333C55.989,6.556,57.046,3,58.103,3C59.161,3,60.218,5.667,61.276,5.667C62.333,5.667,63.391,3,64.448,3C65.506,3,66.563,13.667,67.621,13.667C68.678,13.667,69.736,13.667,70.793,13.667C71.851,13.667,72.908,5.667,73.966,5.667C75.023,5.667,76.08,5.667,77.138,5.667C78.195,5.667,79.253,3,80.31,3C81.368,3,82.425,7,83.483,8.333C84.54,9.667,85.598,11,86.655,11C87.713,11,88.77,11,89.828,11C90.885,11,91.943,11,93,11L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,24.333C2.057,23,3.115,21.667,4.172,21.667C5.23,21.667,6.287,21.667,7.345,21.667C8.402,21.667,9.46,18.556,10.517,16.333C11.575,14.111,12.632,8.333,13.69,8.333C14.747,8.333,15.805,11,16.862,11C17.92,11,18.977,8.333,20.034,8.333C21.092,8.333,22.149,12.333,23.207,13.667C24.264,15,25.322,16.333,26.379,16.333C27.437,16.333,28.494,11,29.552,11C30.609,11,31.667,13.667,32.724,13.667C33.782,13.667,34.839,10.111,35.897,8.333C36.954,6.556,38.011,3,39.069,3C40.126,3,41.184,8.333,42.241,8.333C43.299,8.333,44.356,8.333,45.414,8.333C46.471,8.333,47.529,13.667,48.586,13.667C49.644,13.667,50.701,13.667,51.759,13.667C52.816,13.667,53.874,10.111,54.931,8.333C55.989,6.556,57.046,3,58.103,3C59.161,3,60.218,5.667,61.276,5.667C62.333,5.667,63.391,3,64.448,3C65.506,3,66.563,13.667,67.621,13.667C68.678,13.667,69.736,13.667,70.793,13.667C71.851,13.667,72.908,5.667,73.966,5.667C75.023,5.667,76.08,5.667,77.138,5.667C78.195,5.667,79.253,3,80.31,3C81.368,3,82.425,7,83.483,8.333C84.54,9.667,85.598,11,86.655,11C87.713,11,88.77,11,89.828,11C90.885,11,91.943,11,93,11"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="6" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="11.000000000000002"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$190.70"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-32.9%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 0.8x against a 2.5x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="6.701818077044976" aria-valuetext="7%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "6.70182%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "11px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"0.8x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="87% new buyers, 13% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.87021", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.12979", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"87%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_yqal3" aria-label="Actions for Alpine Fleece Launch" aria-haspopup="menu" id="base-ui-_r_36_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_3g1ow">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_38_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg className="dark:hidden" aria-hidden="true" fill="none" viewBox="0 0 1200 1227">
                                  <path fill="#000" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                                </svg>
                                <svg className="dark:block hidden" aria-hidden="true" fill="none" viewBox="0 0 1200 1227">
                                  <path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Meadow Hammock Creator Cuts, X">
                                  {"Meadow Hammock Creator Cuts"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/gb.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"GB"}
                                      </span>
                                      <span className="sr-only">
                                        {"United Kingdom"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Winback"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$34K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"78% of $43.5K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"669"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+42.9%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 42.9%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_3b_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts7-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4n_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4n_" d="M1,24.474C2.057,22.895,3.115,21.316,4.172,21.316C5.23,21.316,6.287,21.947,7.345,21.947C8.402,21.947,9.46,19.105,10.517,18.158C11.575,17.211,12.632,16.263,13.69,16.263C14.747,16.263,15.805,17.526,16.862,17.526C17.92,17.526,18.977,17.316,20.034,16.895C21.092,16.474,22.149,11.421,23.207,10.579C24.264,9.737,25.322,9.316,26.379,9.316C27.437,9.316,28.494,10.789,29.552,11.842C30.609,12.895,31.667,14.579,32.724,15.632C33.782,16.684,34.839,18.158,35.897,18.158C36.954,18.158,38.011,11.211,39.069,11.211C40.126,11.211,41.184,14.368,42.241,14.368C43.299,14.368,44.356,9.947,45.414,9.947C46.471,9.947,47.529,11.632,48.586,12.474C49.644,13.316,50.701,15,51.759,15C52.816,15,53.874,12.579,54.931,11.842C55.989,11.105,57.046,10.579,58.103,10.579C59.161,10.579,60.218,11.211,61.276,11.211C62.333,11.211,63.391,11.211,64.448,11.211C65.506,11.211,66.563,11.842,67.621,11.842C68.678,11.842,69.736,3,70.793,3C71.851,3,72.908,3.421,73.966,4.263C75.023,5.105,76.08,13.105,77.138,13.105C78.195,13.105,79.253,11.842,80.31,11.842C81.368,11.842,82.425,12.474,83.483,12.474C84.54,12.474,85.598,3.632,86.655,3.632C87.713,3.632,88.77,6.368,89.828,7.421C90.885,8.474,91.943,9.211,93,9.947L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,24.474C2.057,22.895,3.115,21.316,4.172,21.316C5.23,21.316,6.287,21.947,7.345,21.947C8.402,21.947,9.46,19.105,10.517,18.158C11.575,17.211,12.632,16.263,13.69,16.263C14.747,16.263,15.805,17.526,16.862,17.526C17.92,17.526,18.977,17.316,20.034,16.895C21.092,16.474,22.149,11.421,23.207,10.579C24.264,9.737,25.322,9.316,26.379,9.316C27.437,9.316,28.494,10.789,29.552,11.842C30.609,12.895,31.667,14.579,32.724,15.632C33.782,16.684,34.839,18.158,35.897,18.158C36.954,18.158,38.011,11.211,39.069,11.211C40.126,11.211,41.184,14.368,42.241,14.368C43.299,14.368,44.356,9.947,45.414,9.947C46.471,9.947,47.529,11.632,48.586,12.474C49.644,13.316,50.701,15,51.759,15C52.816,15,53.874,12.579,54.931,11.842C55.989,11.105,57.046,10.579,58.103,10.579C59.161,10.579,60.218,11.211,61.276,11.211C62.333,11.211,63.391,11.211,64.448,11.211C65.506,11.211,66.563,11.842,67.621,11.842C68.678,11.842,69.736,3,70.793,3C71.851,3,72.908,3.421,73.966,4.263C75.023,5.105,76.08,13.105,77.138,13.105C78.195,13.105,79.253,11.842,80.31,11.842C81.368,11.842,82.425,12.474,83.483,12.474C84.54,12.474,85.598,3.632,86.655,3.632C87.713,3.632,88.77,6.368,89.828,7.421C90.885,8.474,91.943,9.211,93,9.947"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="27" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="9.947368421052632"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$50.80"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-34.4%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 2.2x against a 4.5x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="18.278256775446547" aria-valuetext="18%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "18.2783%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "20px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"2.2x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="14% new buyers, 86% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.143771", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.856229", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"14%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_3g1ow" aria-label="Actions for Meadow Hammock Creator Cuts" aria-haspopup="menu" id="base-ui-_r_3f_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_vqkbq">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3h_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg className="dark:hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                                <svg className="dark:block hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path fill="#fff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Glacier Gloves Brand Exact, Apple Ads">
                                  {"Glacier Gloves Brand Exact"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"US"}
                                      </span>
                                      <span className="sr-only">
                                        {"United States"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Brand Search"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$31.6K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"89% of $35.5K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"2,079"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+17.2%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 17.2%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_3k_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts8-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4o_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4o_" d="M1,23.377C2.057,22.189,3.115,21,4.172,19.981C5.23,18.962,6.287,18.132,7.345,17.264C8.402,16.396,9.46,15.528,10.517,14.774C11.575,14.019,12.632,12.736,13.69,12.736C14.747,12.736,15.805,17.038,16.862,17.038C17.92,17.038,18.977,16.962,20.034,16.811C21.092,16.66,22.149,7.075,23.207,7.075C24.264,7.075,25.322,10.019,26.379,10.019C27.437,10.019,28.494,8.208,29.552,8.208C30.609,8.208,31.667,14.094,32.724,14.094C33.782,14.094,34.839,13.189,35.897,13.189C36.954,13.189,38.011,13.415,39.069,13.415C40.126,13.415,41.184,13.415,42.241,13.415C43.299,13.415,44.356,13.189,45.414,12.736C46.471,12.283,47.529,8.962,48.586,8.208C49.644,7.453,50.701,7.075,51.759,7.075C52.816,7.075,53.874,7.302,54.931,7.755C55.989,8.208,57.046,9.491,58.103,10.472C59.161,11.453,60.218,13.642,61.276,13.642C62.333,13.642,63.391,11.83,64.448,10.472C65.506,9.113,66.563,5.491,67.621,5.491C68.678,5.491,69.736,11.151,70.793,11.151C71.851,11.151,72.908,8.66,73.966,7.302C75.023,5.943,76.08,3,77.138,3C78.195,3,79.253,10.472,80.31,10.472C81.368,10.472,82.425,9.34,83.483,9.34C84.54,9.34,85.598,9.34,86.655,9.34C87.713,9.34,88.77,3.906,89.828,3.906C90.885,3.906,91.943,5.717,93,7.528L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,23.377C2.057,22.189,3.115,21,4.172,19.981C5.23,18.962,6.287,18.132,7.345,17.264C8.402,16.396,9.46,15.528,10.517,14.774C11.575,14.019,12.632,12.736,13.69,12.736C14.747,12.736,15.805,17.038,16.862,17.038C17.92,17.038,18.977,16.962,20.034,16.811C21.092,16.66,22.149,7.075,23.207,7.075C24.264,7.075,25.322,10.019,26.379,10.019C27.437,10.019,28.494,8.208,29.552,8.208C30.609,8.208,31.667,14.094,32.724,14.094C33.782,14.094,34.839,13.189,35.897,13.189C36.954,13.189,38.011,13.415,39.069,13.415C40.126,13.415,41.184,13.415,42.241,13.415C43.299,13.415,44.356,13.189,45.414,12.736C46.471,12.283,47.529,8.962,48.586,8.208C49.644,7.453,50.701,7.075,51.759,7.075C52.816,7.075,53.874,7.302,54.931,7.755C55.989,8.208,57.046,9.491,58.103,10.472C59.161,11.453,60.218,13.642,61.276,13.642C62.333,13.642,63.391,11.83,64.448,10.472C65.506,9.113,66.563,5.491,67.621,5.491C68.678,5.491,69.736,11.151,70.793,11.151C71.851,11.151,72.908,8.66,73.966,7.302C75.023,5.943,76.08,3,77.138,3C78.195,3,79.253,10.472,80.31,10.472C81.368,10.472,82.425,9.34,83.483,9.34C84.54,9.34,85.598,9.34,86.655,9.34C87.713,9.34,88.77,3.906,89.828,3.906C90.885,3.906,91.943,5.717,93,7.528"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="86" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="7.528301886792452"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$15.22"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-24.3%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 7.4x against a 8.0x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="61.3717774476648" aria-valuetext="61%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "61.3718%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "36px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"7.4x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="48% new buyers, 52% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.47837", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.52163", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"48%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_vqkbq" aria-label="Actions for Glacier Gloves Brand Exact" aria-haspopup="menu" id="base-ui-_r_3o_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_6fry9">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3q_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg className="dark:hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                                <svg className="dark:block hidden" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                                  <path fill="#fff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Glacier Gloves Evergreen, Apple Ads">
                                  {"Glacier Gloves Evergreen"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/de.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"DE"}
                                      </span>
                                      <span className="sr-only">
                                        {"Germany"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Brand Search"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$30.6K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"78% of $39K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"3,436"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+1.8%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 1.8%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_3t_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts9-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4p_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4p_" d="M1,24.831C2.057,23.486,3.115,22.141,4.172,20.356C5.23,18.571,6.287,14.119,7.345,14.119C8.402,14.119,9.46,14.39,10.517,14.39C11.575,14.39,12.632,13.712,13.69,13.712C14.747,13.712,15.805,13.847,16.862,13.847C17.92,13.847,18.977,8.831,20.034,8.831C21.092,8.831,22.149,14.119,23.207,14.119C24.264,14.119,25.322,13.667,26.379,12.763C27.437,11.859,28.494,6.525,29.552,6.525C30.609,6.525,31.667,7.339,32.724,7.339C33.782,7.339,34.839,6.254,35.897,6.254C36.954,6.254,38.011,15.203,39.069,15.203C40.126,15.203,41.184,13.147,42.241,11.949C43.299,10.751,44.356,8.017,45.414,8.017C46.471,8.017,47.529,13.712,48.586,13.712C49.644,13.712,50.701,5.034,51.759,4.22C52.816,3.407,53.874,3,54.931,3C55.989,3,57.046,14.119,58.103,14.119C59.161,14.119,60.218,7.881,61.276,7.881C62.333,7.881,63.391,16.017,64.448,16.017C65.506,16.017,66.563,14.48,67.621,13.169C68.678,11.859,69.736,8.153,70.793,8.153C71.851,8.153,72.908,9.237,73.966,9.237C75.023,9.237,76.08,5.305,77.138,5.305C78.195,5.305,79.253,11.814,80.31,11.814C81.368,11.814,82.425,11.814,83.483,11.814C84.54,11.814,85.598,12.085,86.655,12.627C87.713,13.169,88.77,15.203,89.828,15.203C90.885,15.203,91.943,10.39,93,5.576L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,24.831C2.057,23.486,3.115,22.141,4.172,20.356C5.23,18.571,6.287,14.119,7.345,14.119C8.402,14.119,9.46,14.39,10.517,14.39C11.575,14.39,12.632,13.712,13.69,13.712C14.747,13.712,15.805,13.847,16.862,13.847C17.92,13.847,18.977,8.831,20.034,8.831C21.092,8.831,22.149,14.119,23.207,14.119C24.264,14.119,25.322,13.667,26.379,12.763C27.437,11.859,28.494,6.525,29.552,6.525C30.609,6.525,31.667,7.339,32.724,7.339C33.782,7.339,34.839,6.254,35.897,6.254C36.954,6.254,38.011,15.203,39.069,15.203C40.126,15.203,41.184,13.147,42.241,11.949C43.299,10.751,44.356,8.017,45.414,8.017C46.471,8.017,47.529,13.712,48.586,13.712C49.644,13.712,50.701,5.034,51.759,4.22C52.816,3.407,53.874,3,54.931,3C55.989,3,57.046,14.119,58.103,14.119C59.161,14.119,60.218,7.881,61.276,7.881C62.333,7.881,63.391,16.017,64.448,16.017C65.506,16.017,66.563,14.48,67.621,13.169C68.678,11.859,69.736,8.153,70.793,8.153C71.851,8.153,72.908,9.237,73.966,9.237C75.023,9.237,76.08,5.305,77.138,5.305C78.195,5.305,79.253,11.814,80.31,11.814C81.368,11.814,82.425,11.814,83.483,11.814C84.54,11.814,85.598,12.085,86.655,12.627C87.713,13.169,88.77,15.203,89.828,15.203C90.885,15.203,91.943,10.39,93,5.576"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="158" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="5.576271186440678"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$8.91"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-1.4%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 11.6x against a 8.0x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="96.35379238257006" aria-valuetext="96%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "96.3538%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "36px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"11.6x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="45% new buyers, 55% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.451797", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.548203", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"45%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_6fry9" aria-label="Actions for Glacier Gloves Evergreen" aria-haspopup="menu" id="base-ui-_r_41_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_jbbur">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_43_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <IconTile variant="outline" size="sm" aria-hidden="true">
                                <svg aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
                                  <defs>
                                    <lineargradient id="a">
                                      <stop offset="0" stopColor="#0fbc5c"></stop>
                                      <stop offset="1" stopColor="#0cba65"></stop>
                                    </lineargradient>
                                    <lineargradient id="g">
                                      <stop offset=".231" stopColor="#0fbc5f"></stop>
                                      <stop offset=".312" stopColor="#0fbc5f"></stop>
                                      <stop offset=".366" stopColor="#0fbc5e"></stop>
                                      <stop offset=".458" stopColor="#0fbc5d"></stop>
                                      <stop offset=".54" stopColor="#12bc58"></stop>
                                      <stop offset=".699" stopColor="#28bf3c"></stop>
                                      <stop offset=".771" stopColor="#38c02b"></stop>
                                      <stop offset=".861" stopColor="#52c218"></stop>
                                      <stop offset=".915" stopColor="#67c30f"></stop>
                                      <stop offset="1" stopColor="#86c504"></stop>
                                    </lineargradient>
                                    <lineargradient id="h">
                                      <stop offset=".142" stopColor="#1abd4d"></stop>
                                      <stop offset=".248" stopColor="#6ec30d"></stop>
                                      <stop offset=".312" stopColor="#8ac502"></stop>
                                      <stop offset=".366" stopColor="#a2c600"></stop>
                                      <stop offset=".446" stopColor="#c8c903"></stop>
                                      <stop offset=".54" stopColor="#ebcb03"></stop>
                                      <stop offset=".616" stopColor="#f7cd07"></stop>
                                      <stop offset=".699" stopColor="#fdcd04"></stop>
                                      <stop offset=".771" stopColor="#fdce05"></stop>
                                      <stop offset=".861" stopColor="#ffce0a"></stop>
                                    </lineargradient>
                                    <lineargradient id="f">
                                      <stop offset=".316" stopColor="#ff4c3c"></stop>
                                      <stop offset=".604" stopColor="#ff692c"></stop>
                                      <stop offset=".727" stopColor="#ff7825"></stop>
                                      <stop offset=".885" stopColor="#ff8d1b"></stop>
                                      <stop offset="1" stopColor="#ff9f13"></stop>
                                    </lineargradient>
                                    <lineargradient id="b">
                                      <stop offset=".231" stopColor="#ff4541"></stop>
                                      <stop offset=".312" stopColor="#ff4540"></stop>
                                      <stop offset=".458" stopColor="#ff4640"></stop>
                                      <stop offset=".54" stopColor="#ff473f"></stop>
                                      <stop offset=".699" stopColor="#ff5138"></stop>
                                      <stop offset=".771" stopColor="#ff5b33"></stop>
                                      <stop offset=".861" stopColor="#ff6c29"></stop>
                                      <stop offset="1" stopColor="#ff8c18"></stop>
                                    </lineargradient>
                                    <lineargradient id="d">
                                      <stop offset=".408" stopColor="#fb4e5a"></stop>
                                      <stop offset="1" stopColor="#ff4540"></stop>
                                    </lineargradient>
                                    <lineargradient id="c">
                                      <stop offset=".132" stopColor="#0cba65"></stop>
                                      <stop offset=".21" stopColor="#0bb86d"></stop>
                                      <stop offset=".297" stopColor="#09b479"></stop>
                                      <stop offset=".396" stopColor="#08ad93"></stop>
                                      <stop offset=".477" stopColor="#0aa6a9"></stop>
                                      <stop offset=".568" stopColor="#0d9cc6"></stop>
                                      <stop offset=".667" stopColor="#1893dd"></stop>
                                      <stop offset=".769" stopColor="#258bf1"></stop>
                                      <stop offset=".859" stopColor="#3086ff"></stop>
                                    </lineargradient>
                                    <lineargradient id="e">
                                      <stop offset=".366" stopColor="#ff4e3a"></stop>
                                      <stop offset=".458" stopColor="#ff8a1b"></stop>
                                      <stop offset=".54" stopColor="#ffa312"></stop>
                                      <stop offset=".616" stopColor="#ffb60c"></stop>
                                      <stop offset=".771" stopColor="#ffcd0a"></stop>
                                      <stop offset=".861" stopColor="#fecf0a"></stop>
                                      <stop offset=".915" stopColor="#fecf08"></stop>
                                      <stop offset="1" stopColor="#fdcd01"></stop>
                                    </lineargradient>
                                    <lineargradient xlinkHref="#a" id="s" x1="219.7" x2="254.467" y1="329.535" y2="329.535" gradientUnits="userSpaceOnUse"></lineargradient>
                                    <radialgradient xlinkHref="#b" id="m" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#c" id="n" cx="45.259" cy="279.274" r="71.46" fx="45.259" fy="279.274" gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#d" id="l" cx="304.017" cy="118.009" r="47.854" fx="304.017" fy="118.009" gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#e" id="o" cx="181.001" cy="177.201" r="71.46" fx="181.001" fy="177.201" gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#f" id="p" cx="207.673" cy="108.097" r="41.102" fx="207.673" fy="108.097" gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#g" id="r" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <radialgradient xlinkHref="#h" id="j" cx="154.87" cy="145.969" r="71.46" fx="154.87" fy="145.969" gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)" gradientUnits="userSpaceOnUse"></radialgradient>
                                    <filter id="q" width="1.097" height="1.116" x="-.048" y="-.058" color-interpolation-filters="sRGB">
                                      <fegaussianblur stdDeviation="1.701"></fegaussianblur>
                                    </filter>
                                    <filter id="k" width="1.033" height="1.02" x="-.017" y="-.01" color-interpolation-filters="sRGB">
                                      <fegaussianblur stdDeviation=".242"></fegaussianblur>
                                    </filter>
                                    <clippath id="i" clippathunits="userSpaceOnUse">
                                      <path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z"></path>
                                    </clippath>
                                  </defs>
                                  <g clipPath="url(#i)" transform="matrix(.95792 0 0 .98525 -90.174 -78.856)">
                                    <path fill="url(#j)" d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z" filter="url(#k)"></path>
                                    <path fill="url(#l)" d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z" filter="url(#k)"></path>
                                    <path fill="url(#m)" d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z" filter="url(#k)"></path>
                                    <path fill="url(#n)" d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z" filter="url(#k)"></path>
                                    <path fill="#3086ff" d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z" filter="url(#k)"></path>
                                    <path fill="url(#o)" d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z" filter="url(#k)"></path>
                                    <path fill="url(#p)" d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z" filter="url(#q)"></path>
                                    <path fill="url(#r)" d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z" filter="url(#k)"></path>
                                    <path fill="url(#s)" d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z" filter="url(#k)" opacity=".5"></path>
                                  </g>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <button className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Trailhead Jacket Holiday Preview, Google Search">
                                  {"Trailhead Jacket Holiday Preview"}
                                </button>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/fr.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        {"FR"}
                                      </span>
                                      <span className="sr-only">
                                        {"France"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Winback"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Live"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-spend-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"$27.5K"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"96% of $28.5K"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-conversions-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="font-medium tabular-nums text-foreground">
                                {"2,781"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"+25.3%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <div className="flex items-center" role="img" aria-label="Daily conversions over 30 days, up 25.3%">
                              <ChartContainer>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-7 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_46_" aria-hidden="true">
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="28" style={{position: "relative", cursor: "default", width: "96px", height: "28px"}}>
                                      <svg className="recharts-surface" width="96" height="28" viewBox="0 0 96 28" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts10-clip">
                                            <rect x="1" y="3" height="24" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                          <g className="recharts-area recharts-layer">
                                            <g className="recharts-layer">
                                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4q_)">
                                                <g className="recharts-layer">
                                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="var(--color-conversions)" fillOpacity="0.12" height="24" stroke="none" width="92" id="recharts-area-_r_4q_" d="M1,24.554C2.057,24.172,3.115,23.79,4.172,23.178C5.23,22.567,6.287,21.879,7.345,20.885C8.402,19.892,9.46,18.312,10.517,17.217C11.575,16.121,12.632,15.357,13.69,14.312C14.747,13.268,15.805,10.949,16.862,10.949C17.92,10.949,18.977,11.153,20.034,11.561C21.092,11.968,22.149,13.395,23.207,13.395C24.264,13.395,25.322,11.713,26.379,11.713C27.437,11.713,28.494,15.331,29.552,15.841C30.609,16.35,31.667,16.605,32.724,16.605C33.782,16.605,34.839,15.076,35.897,14.618C36.954,14.159,38.011,14.363,39.069,13.854C40.126,13.344,41.184,9.064,42.241,8.962C43.299,8.86,44.356,8.911,45.414,8.809C46.471,8.707,47.529,6.516,48.586,6.516C49.644,6.516,50.701,12.376,51.759,13.701C52.816,15.025,53.874,15.382,54.931,15.688C55.989,15.994,57.046,16.146,58.103,16.146C59.161,16.146,60.218,6.822,61.276,6.822C62.333,6.822,63.391,11.713,64.448,11.713C65.506,11.713,66.563,3.611,67.621,3.611C68.678,3.611,69.736,8.07,70.793,10.032C71.851,11.994,72.908,15.382,73.966,15.382C75.023,15.382,76.08,13.548,77.138,13.548C78.195,13.548,79.253,15.841,80.31,15.841C81.368,15.841,82.425,14.924,83.483,13.089C84.54,11.255,85.598,3,86.655,3C87.713,3,88.77,8.962,89.828,8.962C90.885,8.962,91.943,6.669,93,4.376L93,27C91.943,27,90.885,27,89.828,27C88.77,27,87.713,27,86.655,27C85.598,27,84.54,27,83.483,27C82.425,27,81.368,27,80.31,27C79.253,27,78.195,27,77.138,27C76.08,27,75.023,27,73.966,27C72.908,27,71.851,27,70.793,27C69.736,27,68.678,27,67.621,27C66.563,27,65.506,27,64.448,27C63.391,27,62.333,27,61.276,27C60.218,27,59.161,27,58.103,27C57.046,27,55.989,27,54.931,27C53.874,27,52.816,27,51.759,27C50.701,27,49.644,27,48.586,27C47.529,27,46.471,27,45.414,27C44.356,27,43.299,27,42.241,27C41.184,27,40.126,27,39.069,27C38.011,27,36.954,27,35.897,27C34.839,27,33.782,27,32.724,27C31.667,27,30.609,27,29.552,27C28.494,27,27.437,27,26.379,27C25.322,27,24.264,27,23.207,27C22.149,27,21.092,27,20.034,27C18.977,27,17.92,27,16.862,27C15.805,27,14.747,27,13.69,27C12.632,27,11.575,27,10.517,27C9.46,27,8.402,27,7.345,27C6.287,27,5.23,27,4.172,27C3.115,27,2.057,27,1,27Z"></path>
                                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.12" height="24" stroke="var(--color-conversions)" width="92" d="M1,24.554C2.057,24.172,3.115,23.79,4.172,23.178C5.23,22.567,6.287,21.879,7.345,20.885C8.402,19.892,9.46,18.312,10.517,17.217C11.575,16.121,12.632,15.357,13.69,14.312C14.747,13.268,15.805,10.949,16.862,10.949C17.92,10.949,18.977,11.153,20.034,11.561C21.092,11.968,22.149,13.395,23.207,13.395C24.264,13.395,25.322,11.713,26.379,11.713C27.437,11.713,28.494,15.331,29.552,15.841C30.609,16.35,31.667,16.605,32.724,16.605C33.782,16.605,34.839,15.076,35.897,14.618C36.954,14.159,38.011,14.363,39.069,13.854C40.126,13.344,41.184,9.064,42.241,8.962C43.299,8.86,44.356,8.911,45.414,8.809C46.471,8.707,47.529,6.516,48.586,6.516C49.644,6.516,50.701,12.376,51.759,13.701C52.816,15.025,53.874,15.382,54.931,15.688C55.989,15.994,57.046,16.146,58.103,16.146C59.161,16.146,60.218,6.822,61.276,6.822C62.333,6.822,63.391,11.713,64.448,11.713C65.506,11.713,66.563,3.611,67.621,3.611C68.678,3.611,69.736,8.07,70.793,10.032C71.851,11.994,72.908,15.382,73.966,15.382C75.023,15.382,76.08,13.548,77.138,13.548C78.195,13.548,79.253,15.841,80.31,15.841C81.368,15.841,82.425,14.924,83.483,13.089C84.54,11.255,85.598,3,86.655,3C87.713,3,88.77,8.962,89.828,8.962C90.885,8.962,91.943,6.669,93,4.376"></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                          <g className="recharts-layer recharts-reference-dot">
                                            <circle className="recharts-dot recharts-reference-dot-dot" x="29" y="148" r="2" fill="var(--color-conversions)" stroke="none" fillOpacity="1" strokeWidth="1" cx="93" cy="4.375796178343949"></circle>
                                          </g>
                                        </g>
                                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </ChartContainer>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-end truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                            <div className="flex flex-col gap-0.5 items-end min-w-0">
                              <span className="tabular-nums text-foreground">
                                {"$9.89"}
                              </span>
                              <span className="tabular-nums text-success text-xs">
                                {"-32%"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="ROAS 13.1x against a 4.5x target">
                              <div className="flex h-3.5 items-center relative shrink-0 w-14">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-track]:bg-muted-foreground/30 **:data-[slot=progress-track]:h-1.5 w-full" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true">
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="absolute bg-foreground inset-y-0 w-0.5" aria-hidden="true" style={{insetInlineStart: "20px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"13.1x"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-newBuyers-size) * 1px)"}}>
                            <div className="flex gap-2 items-center justify-end min-w-0" role="img" aria-label="26% new buyers, 74% returning">
                              <div className="flex gap-0.5 h-1.5 shrink-0 w-14" aria-hidden="true">
                                <span className="bg-blue-500 min-w-1 rounded-full" style={{flexGrow: "0.257185", flexBasis: "0px"}}></span>
                                <span className="bg-muted-foreground/30 min-w-1 rounded-full" style={{flexGrow: "0.742815", flexBasis: "0px"}}></span>
                              </div>
                              <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-9">
                                {"26%"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="cmp_jbbur" aria-label="Actions for Trailhead Jacket Holiday Preview" aria-haspopup="menu" id="base-ui-_r_4a_" aria-expanded="false">
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_4c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"10"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_4c_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 10 of 30 campaigns"}
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                    <span className="sr-only">
                      {"Go to previous page"}
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                    {"1"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                    {"2"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                    {"3"}
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                    <span className="sr-only">
                      {"Go to next page"}
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </DataGridPagination>
            </DataGridProvider>
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
