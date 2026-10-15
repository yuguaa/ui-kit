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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Prompt queue data grid"}
      </h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 lg:items-center lg:min-h-12 lg:py-0 py-3">
          <div className="flex gap-2 items-center min-w-0">
            <svg className="lucide lucide-briefcase-business shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
              <path d="M12 12h.01"></path>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
              <rect width={20} height={14} x={2} y={6} rx={2}></rect>
            </svg>
            <h2 className="font-medium text-foreground text-sm truncate">
              {"Prompt Queue"}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 items-center lg:flex-nowrap lg:ml-auto min-w-0">
            <ToggleGroup className="shrink-0" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Prompt queue view" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2 whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Card view" extracted="1">
                <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                  <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                  <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                  <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                  <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                </svg>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={-1} aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="List view">
                <svg className="lucide lucide-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                  <path d="M3 5h.01"></path>
                  <path d="M3 12h.01"></path>
                  <path d="M3 19h.01"></path>
                  <path d="M8 5h13"></path>
                  <path d="M8 12h13"></path>
                  <path d="M8 19h13"></path>
                </svg>
              </ToggleGroupItem>
            </ToggleGroup>
            <Button type="button" tabIndex={0} aria-pressed="true">
              <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
              </svg>
              {"Filter"}
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              {"Export"}
            </Button>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                <path d="M14 17H5"></path>
                <path d="M19 7h-9"></path>
                <circle cx={17} cy={17} r={3}></circle>
                <circle cx={7} cy={7} r={3}></circle>
              </svg>
              {"Display"}
            </PopoverTrigger>
            </Popover>
          </div>
        </div>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <Tabs data-orientation="horizontal" activationDirection="none">
          <div className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none] overflow-x-auto overflow-y-visible">
            <TabsList className="gap-6 w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
              <TabsTrigger className="after:bottom-[-1px] pb-3 pt-3 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_5_" compositeItemActive="">
                {"Overview"}
              </TabsTrigger>
              <TabsTrigger className="after:bottom-[-1px] pb-3 pt-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_6_">
                {"My queue"}
              </TabsTrigger>
              <TabsTrigger className="after:bottom-[-1px] pb-3 pt-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_7_">
                {"Review"}
              </TabsTrigger>
              <TabsTrigger className="after:bottom-[-1px] pb-3 pt-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_8_">
                {"Stale"}
              </TabsTrigger>
              <TabsTrigger className="after:bottom-[-1px] pb-3 pt-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_9_">
                {"Activity"}
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <div className="bg-muted/40 flex flex-col gap-2 lg:px-4 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
          <Filters>
            <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
              <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Risk is no value" ruleId="priority-1" tabIndex={0} index="0">
                <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Risk">
                  <span className="flex items-center">
                    <span>
                      {"Risk"}
                    </span>
                  </span>
                </div>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                  {"is"}
                </PopoverTrigger>
                </Popover>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Select..." tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_e_" aria-haspopup="dialog" aria-expanded="false">
                  {"Select"}
                </PopoverTrigger>
                </Popover>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Risk filter options" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={12} cy={5} r={1}></circle>
                    <circle cx={12} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </FilterChip>
            </div>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Add prompt filter" baseUiClickTrigger="" id="base-ui-_r_l_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.25 3.25h11.5L9.5 8.15v2.95l-3 1.5V8.15L2.25 3.25Z"></path>
                <path d="M11.5 9.75v4"></path>
                <path d="M9.5 11.75h4"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
            <div className="sr-only" aria-live="polite" role="status">
              <span></span>
            </div>
          </Filters>
          <Button className="self-start sm:self-auto" type="button" tabIndex={0}>
            {"Clear all"}
          </Button>
        </div>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <div className="relative">
          <DataGridProvider>
          <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_m_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <div role="presentation" style={{minWidth: "fit-content"}}>
                <DataGridProvider>
                <DataGridTableViewport>
                  <DataGridProvider>
                  <DataGridTable>
                    <colgroup>
                      <col style={{width: "330px"}} />
                      <col style={{width: "210px"}} />
                      <col style={{width: "118px"}} />
                      <col style={{width: "130px"}} />
                      <col style={{width: "130px"}} />
                      <col style={{width: "116px"}} />
                      <col style={{width: "112px"}} />
                    </colgroup>
                    <thead>
                      <tr className="[&>th]:border-b bg-transparent">
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="title" data-header-id="title" data-header-depth="0" style={{width: "330px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Prompt"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "210px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Owner"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="priority" data-header-id="priority" data-header-depth="0" style={{width: "118px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Risk"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "130px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Status"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="type" data-header-id="type" data-header-depth="0" style={{width: "130px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Check"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="dueAt" data-header-id="dueAt" data-header-depth="0" style={{width: "116px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Due"}
                              <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                <path d="m5 12 7-7 7 7"></path>
                                <path d="M12 19V5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "112px"}}>
                          <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                            {"Actions"}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <DataGridProvider>
                    <DataGridTableBody>
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4821">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Renewal Risk Summary"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2042 SAFE-0914"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 11, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Mira Stone"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"AI product operator"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Critical"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Review required"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Safety"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-12">
                            {"Jun 12, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Renewal Risk Summary">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Renewal Risk Summary ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Renewal Risk Summary" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4834">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Support Reply Draft"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2041 SAFE-0915"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 11, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Sana Qureshi"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"Prompt librarian"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"High"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Stale"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Safety"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-12">
                            {"Jun 12, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Support Reply Draft">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Support Reply Draft ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Support Reply Draft" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4918">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Tool Call Policy"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2044 SAFE-0918"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 12, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                {"NV"}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Nora Vale"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"Safety reviewer"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Critical"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Review required"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Safety"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-12">
                            {"Jun 12, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Tool Call Policy">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Tool Call Policy ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Tool Call Policy" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4930">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Refund Policy Clarifier"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2045 SAFE-0920"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 10, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Mira Stone"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"AI product operator"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Critical"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Stale"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow">
                            <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Owner"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-12">
                            {"Jun 12, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Refund Policy Clarifier">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Refund Policy Clarifier ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Refund Policy Clarifier" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4860">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Invoice Variance Explainer"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2043 SAFE-0914"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 10, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Theo Park"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"ML engineer"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Medium"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Draft"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Evaluation"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-13">
                            {"Jun 13, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Invoice Variance Explainer">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Invoice Variance Explainer ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Invoice Variance Explainer" aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4891">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Admin Action Explainer"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2045 SAFE-0917"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 12, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Mira Stone"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"AI product operator"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"High"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Review required"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow">
                            <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Owner"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-13">
                            {"Jun 13, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Admin Action Explainer">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Admin Action Explainer ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Admin Action Explainer" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4951">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Medical Advice Refusal"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2044 SAFE-0923"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 12, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                {"NV"}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Nora Vale"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"Safety reviewer"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Critical"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Review required"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Safety"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-13">
                            {"Jun 13, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Medical Advice Refusal">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Medical Advice Refusal ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Medical Advice Refusal" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4872">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Safety Refusal Classifier"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2044 SAFE-0916"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 10, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                {"NV"}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Nora Vale"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"Safety reviewer"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Medium"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Live"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Safety"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-14">
                            {"Jun 14, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Safety Refusal Classifier">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Safety Refusal Classifier ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Safety Refusal Classifier" aria-haspopup="menu" id="base-ui-_r_1t_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4886">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Provider Fallback Router"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2042 SAFE-0916"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 12, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Theo Park"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"ML engineer"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span className="bg-zinc-400 dark:bg-zinc-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Low"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Ready"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Routing"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-15">
                            {"Jun 15, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Provider Fallback Router">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Provider Fallback Router ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Provider Fallback Router" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
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
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/prompt-row hover:bg-muted/40" data-row-id="PRM-4906">
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Usage Cap Explainer"}
                            </span>
                            <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                              <span className="truncate">
                                {"PROV-2041 SAFE-0918"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums">
                                {"Updated Jun 9, 2026"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Mira Stone"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"AI product operator"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span className="bg-zinc-400 dark:bg-zinc-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Low"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Live"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Evaluation"}
                            </span>
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-sm truncate" title="2026-06-16">
                            {"Jun 16, 2026"}
                          </span>
                        </td>
                        <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex={0} aria-label="Open Usage Cap Explainer">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex={0} aria-label="Mark Usage Cap Explainer ready">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Usage Cap Explainer" aria-haspopup="menu" id="base-ui-_r_27_" aria-expanded="false">
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
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <div className="px-4 py-3">
          <DataGridProvider>
          <DataGridPagination className="py-0">
            <div className="flex flex-wrap gap-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
              <div className="text-muted-foreground text-sm">
                {"Rows per page"}
              </div>
              <Select>
              <SelectTrigger className="w-16" type="button" tabIndex={0} id="base-ui-_r_29_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                <SelectValue>
                  {"10"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_29_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
              <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                {"1 - 10 of 14 prompts"}
              </div>
              <div className="flex gap-1 items-center order-1">
                <Button className="p-0 rtl:rotate-180 text-sm" type="button" disabled="" tabIndex={0} disabled>
                  <span className="sr-only">
                    {"Go to previous page"}
                  </span>
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Button className="bg-accent p-0 text-accent-foreground text-sm" type="button" tabIndex={0}>
                  {"1"}
                </Button>
                <Button className="p-0 text-muted-foreground text-sm" type="button" tabIndex={0}>
                  {"2"}
                </Button>
                <Button className="p-0 rtl:rotate-180 text-sm" type="button" tabIndex={0}>
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
        </div>
      </div>
    </main>
  )
}
