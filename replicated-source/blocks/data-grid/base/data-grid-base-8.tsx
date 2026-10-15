import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
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
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-4 pt-8 sm:p-8 sm:pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Rate Card"}
      </h1>
      <Frame className="w-full" spacing="default">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Rate Card"}
            </div>
            <div className="text-muted-foreground text-xs">
              <span className="gap-1.5 inline-flex items-center whitespace-nowrap">
                <span>
                  {"16 SKUs"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"24.6% below list"}
                </span>
              </span>
            </div>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"Add rate"}
          </Button>
        </header>
        <FramePanel className="p-0">
          <div className="flex gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <InputGroup className="flex-1 sm:max-w-64" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search SKU or name..." aria-label="Search rates" value="" />
            </InputGroup>
            <div className="flex gap-2 items-center ms-auto shrink-0">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                  <path d="M2 5h20"></path>
                  <path d="M6 12h12"></path>
                  <path d="M9 19h6"></path>
                </svg>
                <span className="max-sm:sr-only">
                  {"Filter"}
                </span>
              </PopoverTrigger>
              </Popover>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Display settings" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx={17} cy={17} r={3}></circle>
                  <circle cx={7} cy={7} r={3}></circle>
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
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "236px"}} />
                        <col style={{width: "100px"}} />
                        <col style={{width: "104px"}} />
                        <col style={{width: "100px"}} />
                        <col style={{width: "100px"}} />
                        <col style={{width: "108px"}} />
                        <col style={{width: "108px"}} />
                        <col style={{width: "108px"}} />
                        <col style={{width: "88px"}} />
                        <col style={{width: "44px"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" data-last-col="start" style={{width: "236px", top: "0px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                                {"Product"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div]:-me-2 [&>div]:justify-end align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="listRate" data-header-id="listRate" data-header-depth="0" style={{width: "100px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                                {"List"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div]:-me-2 [&>div]:justify-end align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="discount" data-header-id="discount" data-header-depth="0" style={{width: "104px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                {"Discount"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div]:-me-2 [&>div]:justify-end align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="netRate" data-header-id="netRate" data-header-depth="0" style={{width: "100px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-medium group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                {"Net / unit"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div]:-me-2 [&>div]:justify-end align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="commit" data-header-id="commit" data-header-depth="0" style={{width: "100px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                {"Commit"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div]:-me-2 [&>div]:justify-end align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="usage" data-header-id="usage" data-header-depth="0" style={{width: "108px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                {"Usage"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div]:-me-2 [&>div]:justify-end align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="monthlyCost" data-header-id="monthlyCost" data-header-depth="0" style={{width: "108px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-medium group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                {"Monthly"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="renews" data-header-id="renews" data-header-depth="0" style={{width: "108px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
                                {"Renews"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "88px"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                                {"Status"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{width: "44px", top: "0px"}}></th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-1">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-cpu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CpuIcon" tabler="IconCpu" hugeicons="Cpu02Icon" phosphor="CpuIcon" remixicon="RiCpuLine" aria-hidden="true">
                                  <path d="M12 20v2"></path>
                                  <path d="M12 2v2"></path>
                                  <path d="M17 20v2"></path>
                                  <path d="M17 2v2"></path>
                                  <path d="M2 12h2"></path>
                                  <path d="M2 17h2"></path>
                                  <path d="M2 7h2"></path>
                                  <path d="M20 12h2"></path>
                                  <path d="M20 17h2"></path>
                                  <path d="M20 7h2"></path>
                                  <path d="M7 20v2"></path>
                                  <path d="M7 2v2"></path>
                                  <rect x={4} y={4} width={16} height={16} rx={2}></rect>
                                  <rect x={8} y={8} width={8} height={8} rx={1}></rect>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Standard Compute" id="base-ui-_r_1m_">
                                {"Standard Compute"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.0500"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"28.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0360 per vCPU-hr, open breakdown" id="base-ui-_r_1o_">
                              {"$0.0360"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="186,420 vCPU-hr per month" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"186,420"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Standard Compute: 92%" id="base-ui-_r_1s_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92.00193112327003" aria-valuetext="92%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92.0019%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-right w-10">
                                {"92%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Standard Compute: $6,711.12" id="base-ui-_r_1u_">
                              {"$6,711.12"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Mar 1, 2028"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Standard Compute" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-2">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-cpu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CpuIcon" tabler="IconCpu" hugeicons="Cpu02Icon" phosphor="CpuIcon" remixicon="RiCpuLine" aria-hidden="true">
                                  <path d="M12 20v2"></path>
                                  <path d="M12 2v2"></path>
                                  <path d="M17 20v2"></path>
                                  <path d="M17 2v2"></path>
                                  <path d="M2 12h2"></path>
                                  <path d="M2 17h2"></path>
                                  <path d="M2 7h2"></path>
                                  <path d="M20 12h2"></path>
                                  <path d="M20 17h2"></path>
                                  <path d="M20 7h2"></path>
                                  <path d="M7 20v2"></path>
                                  <path d="M7 2v2"></path>
                                  <rect x={4} y={4} width={16} height={16} rx={2}></rect>
                                  <rect x={8} y={8} width={8} height={8} rx={1}></rect>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Memory Optimized" id="base-ui-_r_25_">
                                {"Memory Optimized"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.0625"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"28.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0486 per vCPU-hr, open breakdown" id="base-ui-_r_27_">
                              {"$0.0486"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="64,000 vCPU-hr per month" id="base-ui-_r_29_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"64,000"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Memory Optimized: 91%" id="base-ui-_r_2b_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="91" aria-valuetext="91%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "91%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-right w-10">
                                {"91%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Memory Optimized: $3,110.40" id="base-ui-_r_2d_">
                              {"$3,110.40"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Jun 15, 2027"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Memory Optimized" aria-haspopup="menu" id="base-ui-_r_2h_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-3">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-cpu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CpuIcon" tabler="IconCpu" hugeicons="Cpu02Icon" phosphor="CpuIcon" remixicon="RiCpuLine" aria-hidden="true">
                                  <path d="M12 20v2"></path>
                                  <path d="M12 2v2"></path>
                                  <path d="M17 20v2"></path>
                                  <path d="M17 2v2"></path>
                                  <path d="M2 12h2"></path>
                                  <path d="M2 17h2"></path>
                                  <path d="M2 7h2"></path>
                                  <path d="M20 12h2"></path>
                                  <path d="M20 17h2"></path>
                                  <path d="M20 7h2"></path>
                                  <path d="M7 20v2"></path>
                                  <path d="M7 2v2"></path>
                                  <rect x={4} y={4} width={16} height={16} rx={2}></rect>
                                  <rect x={8} y={8} width={8} height={8} rx={1}></rect>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for GPU L4" id="base-ui-_r_2k_">
                                {"GPU L4"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.8000"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"19.3%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.6460 per GPU-hr, open breakdown" id="base-ui-_r_2m_">
                              {"$0.6460"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="3,612 GPU-hr per month" id="base-ui-_r_2o_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"3,612"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for GPU L4: 108%" id="base-ui-_r_2q_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true">
                                <ProgressTrack complete="">
                                  <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-destructive text-right w-10">
                                {"108%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for GPU L4: $2,333.35" id="base-ui-_r_2s_">
                              {"$2,333.35"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Jan 31, 2027"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for GPU L4" aria-haspopup="menu" id="base-ui-_r_30_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-4">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                  <rect width={20} height={5} x={2} y={3} rx={1}></rect>
                                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                  <path d="M10 12h4"></path>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Block Storage SSD" id="base-ui-_r_33_">
                                {"Block Storage SSD"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.1000"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"23.5%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0765 per GB-mo, open breakdown" id="base-ui-_r_35_">
                              {"$0.0765"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="48,000 GB-mo per month" id="base-ui-_r_37_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"48,000"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Block Storage SSD: 96%" id="base-ui-_r_39_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="96" aria-valuetext="96%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "96%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-right w-10">
                                {"96%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Block Storage SSD: $3,672.00" id="base-ui-_r_3b_">
                              {"$3,672.00"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Mar 1, 2028"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Block Storage SSD" aria-haspopup="menu" id="base-ui-_r_3f_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-5">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                  <rect width={20} height={5} x={2} y={3} rx={1}></rect>
                                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                  <path d="M10 12h4"></path>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Object Storage" id="base-ui-_r_3i_">
                                {"Object Storage"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.0250"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"32.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0170 per GB-mo, open breakdown" id="base-ui-_r_3k_">
                              {"$0.0170"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="418,600 GB-mo per month" id="base-ui-_r_3m_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"418,600"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Object Storage: 108%" id="base-ui-_r_3o_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true">
                                <ProgressTrack complete="">
                                  <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-destructive text-right w-10">
                                {"108%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Object Storage: $7,116.20" id="base-ui-_r_3q_">
                              {"$7,116.20"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Mar 1, 2028"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Object Storage" aria-haspopup="menu" id="base-ui-_r_3u_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-6">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                                  <circle cx={18} cy={5} r={3}></circle>
                                  <circle cx={6} cy={12} r={3}></circle>
                                  <circle cx={18} cy={19} r={3}></circle>
                                  <line x1={8.59} x2={15.42} y1={13.51} y2={17.49}></line>
                                  <line x1={15.41} x2={8.59} y1={6.51} y2={10.49}></line>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Internet Egress" id="base-ui-_r_41_">
                                {"Internet Egress"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.0900"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"25.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0756 per GB, open breakdown" id="base-ui-_r_43_">
                              {"$0.0756"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="36,480 GB per month" id="base-ui-_r_45_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"36,480"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Internet Egress: 58%" id="base-ui-_r_47_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-warning **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58.00438596491229" aria-valuetext="58%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58.0044%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-right text-warning w-10">
                                {"58%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Internet Egress: $2,757.89" id="base-ui-_r_49_">
                              {"$2,757.89"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Oct 15, 2026"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"Expiring"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Internet Egress" aria-haspopup="menu" id="base-ui-_r_4d_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-7">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                  <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Managed Postgres" id="base-ui-_r_4g_">
                                {"Managed Postgres"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.1250"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"28.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0972 per vCPU-hr, open breakdown" id="base-ui-_r_4i_">
                              {"$0.0972"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="21,900 vCPU-hr per month" id="base-ui-_r_4k_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"21,900"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Managed Postgres: 90%" id="base-ui-_r_4m_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" aria-valuetext="90%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "90%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-right w-10">
                                {"90%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Managed Postgres: $2,128.68" id="base-ui-_r_4o_">
                              {"$2,128.68"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Jun 15, 2027"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Managed Postgres" aria-haspopup="menu" id="base-ui-_r_4s_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-8">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                  <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Redis Cache" id="base-ui-_r_4v_">
                                {"Redis Cache"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.0200"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"25.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.0150 per GB-hr, open breakdown" id="base-ui-_r_51_">
                              {"$0.0150"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="146,000 GB-hr per month" id="base-ui-_r_53_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"146,000"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Redis Cache: 60%" id="base-ui-_r_55_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/60 **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" aria-valuetext="60%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "60%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-muted-foreground text-right w-10">
                                {"60%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Redis Cache: $2,190.00" id="base-ui-_r_57_">
                              {"$2,190.00"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Feb 28, 2027"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Redis Cache" aria-haspopup="menu" id="base-ui-_r_5b_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-9">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                  <path d="M20 2v4"></path>
                                  <path d="M22 4h-4"></path>
                                  <circle cx={4} cy={20} r={2}></circle>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Inference Tokens" id="base-ui-_r_5e_">
                                {"Inference Tokens"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$3.0000"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"23.5%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $2.2950 per 1M tokens, open breakdown" id="base-ui-_r_5g_">
                              {"$2.2950"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="1,850 1M tokens per month" id="base-ui-_r_5i_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"1,850"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Inference Tokens: 116%" id="base-ui-_r_5k_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true">
                                <ProgressTrack complete="">
                                  <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-destructive text-right w-10">
                                {"116%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Inference Tokens: $4,245.75" id="base-ui-_r_5m_">
                              {"$4,245.75"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Jan 31, 2027"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Inference Tokens" aria-haspopup="menu" id="base-ui-_r_5q_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/rate-row hover:bg-muted/40" data-row-id="rate-10">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start">
                            <div className="flex gap-2 items-center min-w-0">
                              <IconTile variant="elevated" size="xs" aria-hidden="true">
                                <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                              </IconTile>
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer font-medium hover:text-primary hover:underline text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Price breakdown for Function Calls" id="base-ui-_r_5t_">
                                {"Function Calls"}
                              </HoverCardTrigger>
                              </HoverCard>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            {"$0.2000"}
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <span>
                              {"5.0%"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help decoration-dotted decoration-muted-foreground/50 font-medium hover:decoration-foreground text-foreground underline underline-offset-4" type="button" aria-label="Net $0.2128 per 1M requests, open breakdown" id="base-ui-_r_5v_">
                              {"$0.2128"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <div className="flex gap-1 items-center justify-end">
                              <Tooltip>
                              <TooltipTrigger className="cursor-help focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/rate-row:opacity-100 hover:text-foreground opacity-0 outline-offset-2 text-muted-foreground transition-opacity" type="button" aria-label="5,400 1M requests per month" id="base-ui-_r_61_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              {"5,400"}
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center justify-end outline-offset-2 w-full" type="button" aria-label="Commit use for Function Calls: 55%" id="base-ui-_r_63_">
                              <Progress className="**:data-[slot=progress-indicator]:bg-warning **:has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 flex-none has-[>[data-slot=progress-indicator]]:bg-muted-foreground/15 w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55.00000000000001" aria-valuetext="55%" role="progressbar" aria-hidden="true">
                                <ProgressTrack progressing="">
                                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "55%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  {"x"}
                                </span>
                              </Progress>
                              <span className="text-right text-warning w-10">
                                {"55%"}
                              </span>
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 px-2 py-1.5 tabular-nums text-right">
                            <HoverCard>
                            <HoverCardTrigger className="cursor-help focus-visible:outline-2 focus-visible:outline-ring/50 font-medium outline-offset-2 text-foreground" type="button" aria-label="Monthly cost for Function Calls: $1,149.12" id="base-ui-_r_65_">
                              {"$1,149.12"}
                            </HoverCardTrigger>
                            </HoverCard>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums whitespace-nowrap">
                              {"Nov 2, 2026"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"Expiring"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Function Calls" aria-haspopup="menu" id="base-ui-_r_69_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                      </DataGridTableBody>
                      </DataGridProvider>
                      <DataGridProvider>
                      <DataGridTableFoot>
                        <DataGridTableFootRow>
                          <td className="align-middle font-medium ps-(--frame-panel-header-px) px-2 py-1.5 text-secondary-foreground/80">
                            <span className="gap-1.5 inline-flex items-center">
                              <span className="text-foreground">
                                {"Total"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"16 SKUs"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle bg-muted/60 border-x border-x-border dark:bg-muted/30 font-medium px-2 py-1.5 tabular-nums text-foreground text-right">
                            {"$41,860.50"}
                          </td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle font-medium pe-(--frame-panel-header-px) px-2 py-1.5 text-secondary-foreground/80"></td>
                        </DataGridTableFootRow>
                      </DataGridTableFoot>
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
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_6b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"10"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_6b_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 10 of 16"}
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex={0} disabled>
                    <span className="sr-only">
                      {"Go to previous page"}
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 1" aria-current="page">
                    {"1"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 2">
                    {"2"}
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex={0}>
                    <span className="sr-only">
                      {"Go to next page"}
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
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
