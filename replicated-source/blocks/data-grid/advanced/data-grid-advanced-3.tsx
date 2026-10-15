import { CascaderTrigger } from "@/registry-neui/bases/base/neui/cascader/cascader"
import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
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
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Toggle } from "@/registry/bases/base/ui/toggle"
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
        {"Campaign targets"}
      </h1>
      <Frame className="[--beat-end-px:var(--grid-cell-px)] [--grid-cell-px:--spacing(3)] w-full" spacing="default">
        <header className="flex flex-row gap-3 items-center justify-between max-sm:flex-col max-sm:items-start px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Campaign Targets"}
            </div>
            <div className="flex flex-wrap gap-x-1.5 items-center text-muted-foreground text-xs">
              <span className="tabular-nums">
                {"30 campaigns"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="tabular-nums">
                {"13 beating both targets"}
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button type="button" tabIndex={0} aria-label="Export the current view" extracted="1">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span className="max-sm:sr-only">
                {"Export"}
              </span>
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"New Campaign"}
            </Button>
          </div>
        </header>
        <FramePanel className="p-0">
          <div className="@container/view-tabs">
            <div className="@3xl/view-tabs:border-b @3xl/view-tabs:flex-row @3xl/view-tabs:gap-4 @3xl/view-tabs:items-end @3xl/view-tabs:justify-between flex flex-col px-(--frame-panel-header-px)">
              <Tabs className="@max-3xl/view-tabs:-mx-(--frame-panel-header-px) @max-3xl/view-tabs:border-b @max-3xl/view-tabs:px-(--frame-panel-header-px) min-w-0" data-orientation="horizontal" activationDirection="none">
                <TabsList className="-mb-px gap-5 h-11! justify-start max-w-full no-scrollbar overflow-x-auto p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Funnel stage">
                  <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                    {"All"}
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                      {"30"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                    {"Prospecting"}
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                      {"16"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                    {"Retargeting"}
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                      {"9"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_">
                    {"Retention"}
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                      {"5"}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="@3xl/view-tabs:-mb-px @3xl/view-tabs:h-11 @max-3xl/view-tabs:pt-(--frame-panel-header-py) flex items-center shrink-0">
                <ToggleGroup className="@max-lg/view-tabs:w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Filter by target verdict" style={{"--gap": "0"}}>
                  <ToggleGroupItem className="@max-lg/view-tabs:flex-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="outline" size="sm" spacing="0">
                    <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                    {"Beating"}
                    <span className="tabular-nums text-muted-foreground">
                      {"13"}
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem className="@max-lg/view-tabs:flex-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
                    <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                    {"At risk"}
                    <span className="tabular-nums text-muted-foreground">
                      {"3"}
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem className="@max-lg/view-tabs:flex-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
                    <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                    {"Missing"}
                    <span className="tabular-nums text-muted-foreground">
                      {"6"}
                    </span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <InputGroup className="sm:w-64" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_8_" placeholder="Search campaigns" aria-label="Search campaigns" value="" />
            </InputGroup>
            <div className="flex flex-1 gap-2 items-center justify-end">
              <Toggle type="button" pressed="" tabIndex={0} aria-pressed="true">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                <span className="max-sm:sr-only">
                  {"Filters"}
                </span>
              </Toggle>
              <CascaderTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 style-luma:[&_svg:not([class*='size-'])]:size-4 style-lyra:[&_svg:not([class*='size-'])]:size-4 style-maia:[&_svg:not([class*='size-'])]:size-4 style-mira:[&_svg:not([class*='size-'])]:size-3.5 style-nova:[&_svg:not([class*='size-'])]:size-4 style-rhea:[&_svg:not([class*='size-'])]:size-4 style-sera:[&_svg:not([class*='size-'])]:size-3.5 style-vega:[&_svg:not([class*='size-'])]:size-4 transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_b_" role="combobox" aria-expanded="false" aria-haspopup="dialog" aria-label="Columns, 8 shown">
                <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" data-icon="inline-start" aria-hidden="true">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
                <span className="max-sm:sr-only">
                  {"Columns"}
                </span>
                <span className="tabular-nums text-muted-foreground">
                  {"8"}
                </span>
              </CascaderTrigger>
              <input id="base-ui-_r_b_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="View settings" baseUiClickTrigger="" id="base-ui-_r_g_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
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
          <DataGrid>
            <div className="relative">
              <DataGridProvider>
              <DataGridScrollArea className="supports-[animation-timeline:scroll()]:[&_[data-slot=scroll-area-viewport]]:scroll-fade-x" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_h_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridProvider>
                    <DataGridTableViewport style={{width: "calc(1214px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                      <DataGridProvider>
                      <DataGridTable style={{"--header-1_channel_channel-size": "124", "--col-channel-size": "124", "--header-1_select_select-size": "41", "--col-select-size": "41", "--header-1_campaign_campaign-size": "277", "--col-campaign-size": "277", "--header-1_roasGroup_roasTarget-size": "358", "--col-roasGroup-size": "150", "--header-1_cpaGroup_cpaTarget-size": "358", "--col-cpaGroup-size": "150", "--header-1_actions_actions-size": "56", "--col-actions-size": "56", "--header-channel-size": "124", "--header-select-size": "41", "--header-campaign-size": "277", "--header-roasTarget-size": "68", "--col-roasTarget-size": "68", "--header-roas-size": "84", "--col-roas-size": "84", "--header-roasDelta-size": "103", "--col-roasDelta-size": "103", "--header-roasBeat-size": "103", "--col-roasBeat-size": "103", "--header-cpaTarget-size": "68", "--col-cpaTarget-size": "68", "--header-cpa-size": "84", "--col-cpa-size": "84", "--header-cpaDelta-size": "103", "--col-cpaDelta-size": "103", "--header-cpaBeat-size": "103", "--col-cpaBeat-size": "103", "--header-actions-size": "56", "--header-center_1_channel_channel-size": "124", "--header-center_1_select_select-size": "41", "--header-center_1_campaign_campaign-size": "277", "--header-center_1_roasGroup_roasTarget-size": "358", "--header-center_1_cpaGroup_cpaTarget-size": "358", "--header-center_1_actions_actions-size": "56", width: "calc(1214px + var(--data-grid-fill-size, 0px))"}}>
                        <colgroup>
                          <col style={{width: "calc(var(--col-channel-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-campaign-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-roasTarget-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-roas-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-roasDelta-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-roasBeat-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-cpa-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th[data-group]]:h-8 [&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e first:ps-(--frame-panel-header-px) font-medium h-10 last:pe-(--frame-panel-header-px) overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" rowSpan="2" aria-sort="none" data-col-id="channel" data-header-id="center_1_channel_channel" data-header-depth="0" data-merged="true" style={{width: "calc(var(--header-center_1_channel_channel-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                          {"Channel"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <Select>
                                        <SelectTrigger className="-mx-2 bg-transparent border-transparent dark:bg-transparent flex-1 focus-visible:border-ring h-7 hover:border-input min-w-0 px-2 shadow-none w-full" type="button" tabIndex={0} id="base-ui-_r_i_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Filter by channel">
                                          <SelectValue>
                                            <span className="text-muted-foreground truncate">
                                              {"Any"}
                                            </span>
                                          </SelectValue>
                                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                            <path d="m6 9 6 6 6-6"></path>
                                            {"▼"}
                                          </svg>
                                        </SelectTrigger>
                                        </Select>
                                        <input id="base-ui-_r_i_-hidden-input" tabIndex={-1} aria-hidden="true" value="__any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" rowSpan="2" data-col-id="select" data-header-id="center_1_select_select" data-header-depth="0" data-merged="true" style={{width: "calc(var(--header-center_1_select_select-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_l_" aria-checked="false" aria-label="Select all"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <Tooltip>
                                        <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex={0} disabled aria-label="Clear all filters" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-funnel-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FunnelXIcon" tabler="IconFilterOff" hugeicons="FilterRemoveIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilterOffLine" aria-hidden="true">
                                            <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                                            <path d="m16.5 3.5 5 5"></path>
                                            <path d="m21.5 3.5-5 5"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" rowSpan="2" aria-sort="none" data-col-id="campaign" data-header-id="center_1_campaign_campaign" data-header-depth="0" data-merged="true" style={{width: "calc(var(--header-center_1_campaign_campaign-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                          {"Campaign"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <InputGroup className="-mx-2 bg-transparent border-transparent dark:bg-transparent flex-1 h-7 has-[[data-slot=input-group-control]:focus-visible]:border-ring hover:border-input shadow-none" role="group">
                                          <InputGroupAddon role="group" data-align="inline-start">
                                            <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                              <path d="m21 21-4.34-4.34"></path>
                                              <circle cx={11} cy={11} r={8}></circle>
                                            </svg>
                                          </InputGroupAddon>
                                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_q_" placeholder="Filter names" aria-label="Filter campaigns by name" value="" />
                                        </InputGroup>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-b border-e font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" colSpan="4" data-col-id="roasGroup" data-header-id="center_1_roasGroup_roasTarget" data-header-depth="0" data-group="true" style={{width: "calc(var(--header-center_1_roasGroup_roasTarget-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center justify-center min-w-0">
                                <span className="font-medium text-foreground text-sm">
                                  {"ROAS"}
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-normal text-muted-foreground text-xs truncate">
                                  {"Higher is better"}
                                </span>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-b border-e font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" colSpan="4" data-col-id="cpaGroup" data-header-id="center_1_cpaGroup_cpaTarget" data-header-depth="0" data-group="true" style={{width: "calc(var(--header-center_1_cpaGroup_cpaTarget-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center justify-center min-w-0">
                                <span className="font-medium text-foreground text-sm">
                                  {"CPA"}
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-normal text-muted-foreground text-xs truncate">
                                  {"Lower is better"}
                                </span>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e-0 first:ps-(--frame-panel-header-px) font-medium h-10 last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" rowSpan="2" data-col-id="actions" data-header-id="center_1_actions_actions" data-header-depth="0" data-merged="true" style={{width: "calc(var(--header-center_1_actions_actions-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <span className="sr-only">
                                        {"Actions"}
                                      </span>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <DataGridTableFillHeadCell aria-hidden="true" rowSpan="2" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          </tr>
                          <tr className="[&>th[data-group]]:h-8 [&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="roasTarget" data-header-id="roasTarget" data-header-depth="1" style={{width: "calc(var(--header-roasTarget-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="-me-2 flex flex-1 justify-end min-w-0">
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                            {"Target"}
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center"></div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="roas" data-header-id="roas" data-header-depth="1" style={{width: "calc(var(--header-roas-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="-me-2 flex flex-1 justify-end min-w-0">
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                            {"Actual"}
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <Popover>
                                        <PopoverTrigger className="-mx-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border-transparent cn-button cn-button-size-default cn-button-variant-outline dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring font-normal gap-1.5 group/button h-7 hover:bg-transparent hover:border-input inline-flex items-center justify-end min-w-0 outline-none px-2 select-none shadow-none transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter ROAS, any value" baseUiClickTrigger="" id="base-ui-_r_t_" aria-haspopup="dialog" aria-expanded="false">
                                          <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                            {"Any"}
                                          </span>
                                          <span className="flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                          </span>
                                        </PopoverTrigger>
                                        </Popover>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" colSpan="2" aria-sort="descending" data-col-id="roasDelta" data-header-id="roasDelta" data-header-depth="1" data-span="2" style={{width: "calc((var(--header-roasDelta-size) + var(--header-roasBeat-size)) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="flex flex-1 justify-center min-w-0 ps-2">
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                            {"vs Target"}
                                            <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                              <path d="M12 5v14"></path>
                                              <path d="m19 12-7 7-7-7"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <Popover>
                                        <PopoverTrigger className="-mx-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border-transparent cn-button cn-button-size-default cn-button-variant-outline dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring font-normal gap-1.5 group/button h-7 hover:bg-transparent hover:border-input inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shadow-none transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter ROAS vs target, any value" baseUiClickTrigger="" id="base-ui-_r_10_" aria-haspopup="dialog" aria-expanded="false">
                                          <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                            {"Any"}
                                          </span>
                                          <span className="flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                          </span>
                                        </PopoverTrigger>
                                        </Popover>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="cpaTarget" data-header-id="cpaTarget" data-header-depth="1" style={{width: "calc(var(--header-cpaTarget-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="-me-2 flex flex-1 justify-end min-w-0">
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                            {"Target"}
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center"></div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="cpa" data-header-id="cpa" data-header-depth="1" style={{width: "calc(var(--header-cpa-size) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="-me-2 flex flex-1 justify-end min-w-0">
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                            {"Actual"}
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <Popover>
                                        <PopoverTrigger className="-mx-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border-transparent cn-button cn-button-size-default cn-button-variant-outline dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring font-normal gap-1.5 group/button h-7 hover:bg-transparent hover:border-input inline-flex items-center justify-end min-w-0 outline-none px-2 select-none shadow-none transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter CPA, any value" baseUiClickTrigger="" id="base-ui-_r_13_" aria-haspopup="dialog" aria-expanded="false">
                                          <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                            {"Any"}
                                          </span>
                                          <span className="flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                          </span>
                                        </PopoverTrigger>
                                        </Popover>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-bottom border-e font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" colSpan="2" aria-sort="none" data-col-id="cpaDelta" data-header-id="cpaDelta" data-header-depth="1" data-span="2" style={{width: "calc((var(--header-cpaDelta-size) + var(--header-cpaBeat-size)) * 1px)"}}>
                              <div className="h-[calc(--spacing(10)-1px)] table table-fixed w-full">
                                <div className="align-middle table-cell">
                                  <div className="flex flex-col">
                                    <div className="flex h-10 items-center">
                                      <div className="flex flex-1 justify-center min-w-0 ps-2">
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                            {"vs Target"}
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="before:absolute before:bg-border before:h-px before:inset-x-0">
                                      <div className="flex h-10 items-center">
                                        <Popover>
                                        <PopoverTrigger className="-mx-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border-transparent cn-button cn-button-size-default cn-button-variant-outline dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring font-normal gap-1.5 group/button h-7 hover:bg-transparent hover:border-input inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shadow-none transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter CPA vs target, any value" baseUiClickTrigger="" id="base-ui-_r_16_" aria-haspopup="dialog" aria-expanded="false">
                                          <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                            {"Any"}
                                          </span>
                                          <span className="flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                          </span>
                                        </PopoverTrigger>
                                        </Popover>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <DataGridProvider>
                        <DataGridTableBody>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_h2c6w">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="lead" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "0", "--band-size": "10"}}></span>
                                <span className="[&_[data-slot=icon-tile]]:[background:linear-gradient(color-mix(in_oklab,currentColor_10%,transparent),color-mix(in_oklab,currentColor_10%,transparent)),var(--frame-panel-bg)] [text-shadow:1px_0_var(--frame-panel-bg),-1px_0_var(--frame-panel-bg),0_1px_var(--frame-panel-bg),0_-1px_var(--frame-panel-bg),1px_1px_var(--frame-panel-bg),-1px_-1px_var(--frame-panel-bg),1px_-1px_var(--frame-panel-bg),-1px_1px_var(--frame-panel-bg)] font-medium min-w-0 relative text-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <IconTile className="dark:text-blue-400 text-blue-600" variant="soft" size="xs" aria-hidden="true">
                                      <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MousePointer2Icon" tabler="IconPointer" hugeicons="Cursor01Icon" phosphor="CursorIcon" remixicon="RiCursorLine" aria-hidden="true">
                                        <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                                      </svg>
                                    </IconTile>
                                    <span className="truncate">
                                      {"Search"}
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_17_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Coastline Shell Generic"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"3.6×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-emerald-200 dark:bg-emerald-800/60 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"4.45×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(41.00%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"+24%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 24% above target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$46"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"$37.32"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(52.85%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"−19%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 19% below target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_h2c6w" aria-label="Actions for Coastline Shell Generic" aria-haspopup="menu" id="base-ui-_r_1d_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_k3x9a">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "1", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Search"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1f_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Ridge Boots Brand Exact"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"6.0×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"7.12×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(53.25%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"+19%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 19% above target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$24"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"$21.13"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(70.05%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"−12%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 12% below target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_k3x9a" aria-label="Actions for Ridge Boots Brand Exact" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_p5x1k">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "2", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Search"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1n_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Trailhead Jacket Phrase"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"5.2×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"5.68×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(76.75%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"+9%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 9% above target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$30"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"$27.93"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(82.76%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"−7%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 7% below target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_p5x1k" aria-label="Actions for Trailhead Jacket Phrase" aria-haspopup="menu" id="base-ui-_r_1t_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_v4n8r">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "3", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Search"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1v_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Basecamp Tent Evergreen"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"4.2×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"4.47×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(84.00%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"+6%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 6% above target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$58"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"$55.81"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(90.58%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"−4%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 4% below target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_v4n8r" aria-label="Actions for Basecamp Tent Evergreen" aria-haspopup="menu" id="base-ui-_r_25_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_q7m2d">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "4", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Search"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_27_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Summit Pack Launch"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"3.8×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-red-100 dark:bg-red-900/50 dark:text-red-100 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-red-900">
                                {"3.28×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-destructive text-start text-xs whitespace-nowrap">
                                    {"−14%"}
                                  </span>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-indicator]:translate-x-(--mini-bar-drain) **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(66.00%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 14% below target, worse than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}></td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$42"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"$39.88"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(87.39%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"−5%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 5% below target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_q7m2d" aria-label="Actions for Summit Pack Launch" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_t9b3f">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "5", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Search"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2f_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Alpine Fleece Competitor"}
                                </button>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground" id="base-ui-_r_2j_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                    <line x1={10} x2={14} y1={2} y2={2}></line>
                                    <line x1={12} x2={15} y1={14} y2={11}></line>
                                    <circle cx={12} cy={14} r={8}></circle>
                                  </svg>
                                  <span className="sr-only">
                                    {"Learning"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"3.4×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-muted-foreground" title="Learning, not judged against target yet">
                                {"2.35×"}
                                <span className="sr-only">
                                  {", Learning, not judged against target yet"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative" title="Learning, not judged against target yet">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-muted-foreground text-start text-xs whitespace-nowrap">
                                    {"−31%"}
                                  </span>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:opacity-40 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-indicator]:translate-x-(--mini-bar-drain) **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(23.01%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 31% below target, still learning"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}></td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$44"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-muted-foreground" title="Learning, not judged against target yet">
                                {"$61.18"}
                                <span className="sr-only">
                                  {", Learning, not judged against target yet"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative" title="Learning, not judged against target yet">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-muted-foreground text-start text-xs whitespace-nowrap">
                                    {"+39%"}
                                  </span>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:opacity-40 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-indicator]:translate-x-(--mini-bar-drain) **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(2.41%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                                <span className="sr-only">
                                  {"CPA 39% above target, still learning"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}></td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_t9b3f" aria-label="Actions for Alpine Fleece Competitor" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_m3w7z">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="lead" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "6", "--band-size": "10"}}></span>
                                <span className="[&_[data-slot=icon-tile]]:[background:linear-gradient(color-mix(in_oklab,currentColor_10%,transparent),color-mix(in_oklab,currentColor_10%,transparent)),var(--frame-panel-bg)] [text-shadow:1px_0_var(--frame-panel-bg),-1px_0_var(--frame-panel-bg),0_1px_var(--frame-panel-bg),0_-1px_var(--frame-panel-bg),1px_1px_var(--frame-panel-bg),-1px_-1px_var(--frame-panel-bg),1px_-1px_var(--frame-panel-bg),-1px_1px_var(--frame-panel-bg)] font-medium min-w-0 relative text-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <IconTile className="dark:text-orange-400 text-orange-600" variant="soft" size="xs" aria-hidden="true">
                                      <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        <path d="M3.103 6.034h17.794"></path>
                                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                                      </svg>
                                    </IconTile>
                                    <span className="truncate">
                                      {"Shopping"}
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2p_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Basecamp Tent Price Drop"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"4.6×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-emerald-300 dark:bg-emerald-700/70 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"6.05×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(21.00%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"+32%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 32% above target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$64"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-emerald-200 dark:bg-emerald-800/60 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"$50.59"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(47.61%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"−21%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 21% below target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_m3w7z" aria-label="Actions for Basecamp Tent Price Drop" aria-haspopup="menu" id="base-ui-_r_2v_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_g4t8b">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "7", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Shopping"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_31_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Glacier Gloves Preview"}
                                </button>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground" id="base-ui-_r_35_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                    <line x1={10} x2={14} y1={2} y2={2}></line>
                                    <line x1={12} x2={15} y1={14} y2={11}></line>
                                    <circle cx={12} cy={14} r={8}></circle>
                                  </svg>
                                  <span className="sr-only">
                                    {"Learning"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"3.2×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-muted-foreground" title="Learning, not judged against target yet">
                                {"3.60×"}
                                <span className="sr-only">
                                  {", Learning, not judged against target yet"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative" title="Learning, not judged against target yet">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:opacity-40 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(68.75%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-muted-foreground text-xs whitespace-nowrap">
                                    {"+13%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 13% above target, still learning"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$26"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-muted-foreground" title="Learning, not judged against target yet">
                                {"$23.57"}
                                <span className="sr-only">
                                  {", Learning, not judged against target yet"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative" title="Learning, not judged against target yet">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:opacity-40 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(76.65%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-muted-foreground text-xs whitespace-nowrap">
                                    {"−9%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"CPA 9% below target, still learning"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_g4t8b" aria-label="Actions for Glacier Gloves Preview" aria-haspopup="menu" id="base-ui-_r_39_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_c8r4n">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body" data-group-continues="">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "8", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Shopping"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3b_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Canyon Bottle Feed"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"4.0×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-emerald-950">
                                {"4.11×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}></td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(93.25%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-foreground text-xs whitespace-nowrap">
                                    {"+3%"}
                                  </span>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 3% above target, better than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$18"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-amber-100 dark:bg-amber-900/50 dark:text-amber-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-amber-950">
                                {"$18.89"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-foreground text-start text-xs whitespace-nowrap">
                                    {"+5%"}
                                  </span>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-indicator]:translate-x-(--mini-bar-drain) **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(87.70%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                                <span className="sr-only">
                                  {"CPA 5% above target, a near miss"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}></td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_c8r4n" aria-label="Actions for Canyon Bottle Feed" aria-haspopup="menu" id="base-ui-_r_3h_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:h-(--row-pitch) [--row-pitch:--spacing(11)] data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cmp_d6k2v">
                            <td className="align-middle border-e first:ps-(--frame-panel-header-px) has-[[data-group-continues]]:border-b-0! last:pe-(--frame-panel-header-px) px-3 py-2 relative truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex items-center min-w-0" data-group-run="body">
                                <span className="[--band-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--band-hatch)_0_1px,transparent_1px_4px)] [background-position:0_calc(var(--band-index)*var(--row-pitch)*-1)] [background-size:100%_calc(var(--band-size)*var(--row-pitch))] absolute bg-(--frame-panel-bg) bg-no-repeat dark:[--band-hatch:color-mix(in_oklab,var(--border)_28%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--band-index": "9", "--band-size": "10"}}></span>
                                <span className="sr-only">
                                  {"Shopping"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3j_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-campaign-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <button className="block cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:text-primary hover:underline min-w-0 outline-none text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                                  {"Harbor Duffel Bundle Offer"}
                                </button>
                              </div>
                            </td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-roasTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"3.9×"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-roas-size) * 1px)"}}>
                              <span className="absolute bg-amber-100 dark:bg-amber-900/50 dark:text-amber-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-amber-950">
                                {"3.57×"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-roasDelta-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-foreground text-start text-xs whitespace-nowrap">
                                    {"−8%"}
                                  </span>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-indicator]:translate-x-(--mini-bar-drain) **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(79.00%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                                <span className="sr-only">
                                  {"ROAS 8% below target, a near miss"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-roasBeat-size) * 1px)"}}></td>
                            <td className="align-middle border-e px-3 py-2 text-right truncate" style={{width: "calc(var(--col-cpaTarget-size) * 1px)"}}>
                              <span className="tabular-nums text-muted-foreground">
                                {"$52"}
                              </span>
                            </td>
                            <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-cpa-size) * 1px)"}}>
                              <span className="absolute bg-red-100 dark:bg-red-900/50 dark:text-red-100 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-red-900">
                                {"$57.62"}
                              </span>
                            </td>
                            <td className="align-middle border-e px-3 py-2 truncate" style={{width: "calc(var(--col-cpaDelta-size) * 1px)"}}>
                              <span className="flex items-center min-w-0 relative">
                                <span className="flex flex-1 gap-0.75 items-center min-w-0" aria-hidden="true">
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-destructive text-start text-xs whitespace-nowrap">
                                    {"+11%"}
                                  </span>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-indicator]:translate-x-(--mini-bar-drain) **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(73.00%, 100% - 0.375rem), 1px)"}}>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                                <span className="sr-only">
                                  {"CPA 11% above target, worse than target"}
                                </span>
                              </span>
                            </td>
                            <td className="align-middle border-e pe-(--beat-end-px) px-3 py-2 truncate" style={{width: "calc(var(--col-cpaBeat-size) * 1px)"}}></td>
                            <td className="align-middle border-e-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-(--frame-panel-header-px) px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} rowActions="cmp_d6k2v" aria-label="Actions for Harbor Duffel Bundle Offer" aria-haspopup="menu" id="base-ui-_r_3p_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={12} cy={5} r={1}></circle>
                                    <circle cx={12} cy={19} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                        </DataGridTableBody>
                        </DataGridProvider>
                        <DataGridProvider>
                        <DataGridTableFoot>
                          <DataGridTableFootRow>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium h-8 pe-(--beat-end-px) px-3 py-2 relative text-secondary-foreground/80" colSpan="2">
                              <span className="flex items-center">
                                <span className="flex flex-none gap-0.75 items-center leading-4 min-w-0 text-muted-foreground text-xs" aria-hidden="true" style={{width: "calc(calc(var(--col-roasDelta-size, 103) * 1px) - 1px - 2 * var(--grid-cell-px))"}}>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-start text-xs whitespace-nowrap">
                                    {"40%"}
                                  </span>
                                  <span className="flex flex-1 justify-center min-w-0">
                                    <span className="whitespace-nowrap">
                                      {"Missing"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex flex-1 gap-0.75 items-center leading-4 min-w-0 ms-[calc(2*var(--grid-cell-px)+1px)] text-muted-foreground text-xs" aria-hidden="true">
                                  <span className="flex flex-1 justify-center min-w-0">
                                    <span className="whitespace-nowrap">
                                      {"Beating"}
                                    </span>
                                  </span>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-xs whitespace-nowrap">
                                    {"40%"}
                                  </span>
                                </span>
                              </span>
                              <span className="-translate-y-1/2 absolute leading-4 tabular-nums text-center text-muted-foreground text-xs top-1/2 w-3.25" aria-hidden="true" style={{insetInlineStart: "calc(calc(var(--col-roasDelta-size, 103) * 1px) - 7px)"}}>
                                {"0"}
                              </span>
                              <span className="sr-only">
                                {"Bars run from 0 at the line between the halves to 40% off target, misses in the first half and beats in the second"}
                              </span>
                            </td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle border-e font-medium h-8 pe-(--beat-end-px) px-3 py-2 relative text-secondary-foreground/80" colSpan="2">
                              <span className="flex items-center">
                                <span className="flex flex-none gap-0.75 items-center leading-4 min-w-0 text-muted-foreground text-xs" aria-hidden="true" style={{width: "calc(calc(var(--col-cpaDelta-size, 103) * 1px) - 1px - 2 * var(--grid-cell-px))"}}>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-start text-xs whitespace-nowrap">
                                    {"40%"}
                                  </span>
                                  <span className="flex flex-1 justify-center min-w-0">
                                    <span className="whitespace-nowrap">
                                      {"Missing"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex flex-1 gap-0.75 items-center leading-4 min-w-0 ms-[calc(2*var(--grid-cell-px)+1px)] text-muted-foreground text-xs" aria-hidden="true">
                                  <span className="flex flex-1 justify-center min-w-0">
                                    <span className="whitespace-nowrap">
                                      {"Beating"}
                                    </span>
                                  </span>
                                  <span className="leading-4 min-w-9 shrink-0 tabular-nums text-end text-xs whitespace-nowrap">
                                    {"40%"}
                                  </span>
                                </span>
                              </span>
                              <span className="-translate-y-1/2 absolute leading-4 tabular-nums text-center text-muted-foreground text-xs top-1/2 w-3.25" aria-hidden="true" style={{insetInlineStart: "calc(calc(var(--col-cpaDelta-size, 103) * 1px) - 7px)"}}>
                                {"0"}
                              </span>
                              <span className="sr-only">
                                {"Bars run from 0 at the line between the halves to 40% off target, misses in the first half and beats in the second"}
                              </span>
                            </td>
                            <td className="align-middle border-e font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
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
          </DataGrid>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_3r_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"10"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_3r_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 10 of 30"}
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
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 3">
                    {"3"}
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
